import asyncio
import math
import logging
from datetime import timedelta

import async_timeout

from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, CoordinatorEntity
from homeassistant.const import CONF_ENTITY_ID
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.util import dt as dt_util

from .const import (
    DOMAIN,
    BURGERNET_API,
    BURGERNET_ACTIONS_API,
    NL_ALERT_API,
    STATIC_POSTER_URL,
    CONF_MAX_BURGERNET_ACTIONS,
)

_LOGGER = logging.getLogger(__name__)
SCAN_INTERVAL = timedelta(minutes=10)


def haversine(lat1, lon1, lat2, lon2):
    """Calculate distance (m) between two lat/lon points."""
    R = 6371000
    f1, f2 = math.radians(lat1), math.radians(lat2)
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin(dlon / 2) ** 2
    return R * (2 * math.atan2(math.sqrt(a), math.sqrt(1 - a)))


def _resolve_coordinates(hass, location_source, tracker_entity_id):
    """Return lat/lon from config or a device_tracker entity."""
    state = None
    if location_source == "entity" and tracker_entity_id:
        state = hass.states.get(tracker_entity_id)

    if state and state.attributes.get("latitude") is not None:
        return state.attributes["latitude"], state.attributes["longitude"]
    return hass.config.latitude, hass.config.longitude


async def async_setup_entry(hass, entry, async_add_entities):
    config = {**entry.data, **entry.options}
    location_source = config.get("location_source", "home")
    tracker_entity_id = config.get(CONF_ENTITY_ID)
    max_radius_km = config.get("max_radius", config.get("max_radius (NL-ALERT)", 5))
    max_radius_m = max_radius_km * 1000
    max_actions = config.get(CONF_MAX_BURGERNET_ACTIONS, 1)
    try:
        max_actions = int(max_actions)
    except (TypeError, ValueError):
        max_actions = 1
    max_actions = max(1, min(3, max_actions))
    session = async_get_clientsession(hass)

    # AmberAlert JSON coordinator (Burgernet landactiehost API)
    async def _fetch_amber():
        async with async_timeout.timeout(15):
            resp = await session.get(
                BURGERNET_API,
                headers={"Accept": "application/json"},
            )
            resp.raise_for_status()
            return await resp.json()

    coordinator_amber = DataUpdateCoordinator(
        hass,
        _LOGGER,
        name=f"{DOMAIN}_amber",
        update_interval=SCAN_INTERVAL,
        update_method=_fetch_amber,
    )

    # NL-Alert JSON coordinator
    async def _fetch_nl():
        async with async_timeout.timeout(15):
            resp = await session.get(
                NL_ALERT_API,
                headers={"Accept": "application/json"},
            )
            resp.raise_for_status()
            return await resp.json()

    coordinator_nl = DataUpdateCoordinator(
        hass,
        _LOGGER,
        name=f"{DOMAIN}_nl_alert",
        update_interval=SCAN_INTERVAL,
        update_method=_fetch_nl,
    )

    # Burgernet actions (v2) with API key and radius filtering
    async def _fetch_burgernet():
        async with async_timeout.timeout(15):
            resp = await session.get(
                BURGERNET_ACTIONS_API,
                headers={
                    "Accept": "application/json",
                },
            )
            resp.raise_for_status()
            return await resp.json()

    coordinator_burgernet = DataUpdateCoordinator(
        hass,
        _LOGGER,
        name=f"{DOMAIN}_burgernet",
        update_interval=SCAN_INTERVAL,
        update_method=_fetch_burgernet,
    )

    # initial fetch
    await asyncio.gather(
        coordinator_amber.async_config_entry_first_refresh(),
        coordinator_nl.async_config_entry_first_refresh(),
        coordinator_burgernet.async_config_entry_first_refresh(),
    )

    burgernet_action_sensors = [
        BurgernetActionSensor(
            coordinator_burgernet,
            hass,
            location_source,
            tracker_entity_id,
            max_radius_m,
            index,
            entry.entry_id,
        )
        for index in range(max_actions)
    ]

    async_add_entities(
        [
            AmberAlertSensor(
                coordinator_amber,
                hass,
                location_source,
                tracker_entity_id,
                max_radius_m,
            ),
            BurgernetSearchSensor(
                coordinator_burgernet,
                hass,
                location_source,
                tracker_entity_id,
                max_radius_m,
            ),
            *burgernet_action_sensors,
            NLAlertSensor(
                coordinator_nl,
                hass,
                location_source,
                tracker_entity_id,
                max_radius_m,
            ),
        ],
        update_before_add=True,
    )


class AmberAlertSensor(CoordinatorEntity, SensorEntity):
    """Amber/VKA sensor using Burgernet landactiehost API."""

    def __init__(self, coordinator, hass, location_source, tracker_entity_id, max_radius_m):
        super().__init__(coordinator)
        self.hass = hass
        self.location_source = location_source
        self.tracker_entity_id = tracker_entity_id
        # Radius currently unused for AmberAlert; retained for compatibility / potential future location filtering
        self.max_radius_m = max_radius_m
        self._attr_name = "AmberAlert"
        self._attr_unique_id = "amber_alert"

    @property
    def available(self):
        return self.coordinator.last_update_success

    def _get_active_alerts(self):
        """Return list of active alerts (State=Actual, Type=Alert/Update) with parsed levels."""
        data = self.coordinator.data or []
        if not isinstance(data, list):
            return []

        active = []
        for alert in data:
            state = alert.get("State")
            alert_type = alert.get("Type")
            if state != "Actual" or alert_type not in ("Alert", "Update"):
                continue

            try:
                level = int(alert.get("AlertLevel", 0))
            except (TypeError, ValueError):
                level = 0

            area = alert.get("Area") or {}
            active.append(
                {
                    "alert_id": alert.get("AlertId"),
                    "level": level,
                    "state": state,
                    "type": alert_type,
                    "scope": alert.get("Scope"),
                    "area_description": area.get("Description"),
                    "circle": area.get("Circle"),
                    "circle_km": area.get("CircleKM"),
                }
            )
        return active

    @property
    def state(self):
        """Return 'unsafe' if any active alert has level >= 5, otherwise 'safe'."""
        active = self._get_active_alerts()
        if any(a.get("level", 0) >= 5 for a in active):
            return "unsafe"
        return "safe"

    @property
    def extra_state_attributes(self):
        active = self._get_active_alerts()
        highest = max((a.get("level", 0) for a in active), default=0)
        return {
            "poster_url": STATIC_POSTER_URL,
            "active_alerts_count": len(active),
            "highest_alert_level": highest if highest > 0 else None,
            "active_alerts": active,
        }


class BurgernetSearchSensor(CoordinatorEntity, SensorEntity):
    """Burgernet sensor: location-filtered using actions API (v2)."""

    def __init__(self, coordinator, hass, location_source, tracker_entity_id, max_radius_m):
        super().__init__(coordinator)
        self.hass = hass
        self.location_source = location_source
        self.tracker_entity_id = tracker_entity_id
        self.max_radius_m = max_radius_m
        self._attr_name = "Burgernet"
        self._attr_unique_id = "burgernet_search"

    @property
    def available(self):
        return self.coordinator.last_update_success

    def _get_actions(self):
        lat0, lon0 = _resolve_coordinates(self.hass, self.location_source, self.tracker_entity_id)
        return _prepare_burgernet_actions(self.coordinator.data, lat0, lon0, self.max_radius_m)

    @property
    def state(self):
        actions = self._get_actions()
        return "unsafe" if any(a.get("active") for a in actions) else "safe"

    @property
    def extra_state_attributes(self):
        actions = self._get_actions()
        active_actions = [a for a in actions if a.get("active")]
        latest = active_actions[0] if active_actions else (actions[0] if actions else None)

        attrs = {
            "active_actions_count": len(active_actions),
            "actions": actions,
        }

        if latest:
            attrs.update({
                "latest_action_id": latest.get("id"),
                "latest_action_active": latest.get("active"),
                "latest_message": latest.get("latest_message"),
                "latest_message_type": latest.get("latest_message_type"),
                "latest_message_time": latest.get("latest_message_time"),
                "latest_conversation": latest.get("conversation"),
            })

            area = latest.get("area") or {}
            if area.get("distance_m") is not None:
                attrs["nearest_action_distance_m"] = area["distance_m"]

        return attrs


class BurgernetActionSensor(CoordinatorEntity, SensorEntity):
    """Individual Burgernet action sensor with GPS attributes."""

    def __init__(
        self,
        coordinator,
        hass,
        location_source,
        tracker_entity_id,
        max_radius_m,
        index,
        entry_id,
    ):
        super().__init__(coordinator)
        self.hass = hass
        self.location_source = location_source
        self.tracker_entity_id = tracker_entity_id
        self.max_radius_m = max_radius_m
        self.index = index
        self._attr_name = f"Burgernet Action {index + 1}"
        self._attr_unique_id = f"{entry_id}_burgernet_action_{index + 1}"

    @property
    def available(self):
        return self.coordinator.last_update_success

    def _get_action(self):
        lat0, lon0 = _resolve_coordinates(self.hass, self.location_source, self.tracker_entity_id)
        actions = _prepare_burgernet_actions(self.coordinator.data, lat0, lon0, self.max_radius_m)
        if self.index < len(actions):
            return actions[self.index]
        return None

    @property
    def state(self):
        action = self._get_action()
        if not action:
            return None
        return "active" if action.get("active") else "closed"

    @property
    def extra_state_attributes(self):
        action = self._get_action()
        if not action:
            return {
                "action_index": self.index + 1,
                "active_action": False,
            }

        area = action.get("area") or {}
        return {
            "action_index": self.index + 1,
            "action_id": action.get("id"),
            "municipality": action.get("municipality"),
            "action_type": action.get("action_type"),
            "active": action.get("active"),
            "start": action.get("start"),
            "end": action.get("end"),
            "latest_message": action.get("latest_message"),
            "latest_message_type": action.get("latest_message_type"),
            "latest_message_time": action.get("latest_message_time"),
            "conversation": action.get("conversation"),
            "messages": action.get("messages"),
            "latitude": area.get("lat"),
            "longitude": area.get("lng"),
            "radius_m": area.get("radius"),
            "distance_m": area.get("distance_m"),
        }


class NLAlertSensor(CoordinatorEntity, SensorEntity):
    """NL-Alert sensor: unsafe if any polygon covers home within radius."""

    def __init__(self, coordinator, hass, location_source, tracker_entity_id, max_radius_m):
        super().__init__(coordinator)
        self.hass = hass
        self.location_source = location_source
        self.tracker_entity_id = tracker_entity_id
        self.max_radius_m = max_radius_m
        self._attr_name = "NL-Alert"
        self._attr_unique_id = "nl_alert"

    @property
    def available(self):
        return self.coordinator.last_update_success

    @property
    def state(self):
        items = (self.coordinator.data or {}).get("data", [])
        return "unsafe" if self._get_active_item(items) else "safe"

    @property
    def extra_state_attributes(self):
        item = self._get_active_item((self.coordinator.data or {}).get("data", []))
        message = item.get("message") if item else None
        return {
            "nl_alert_id": item.get("id") if item else None,
            "nl_alert_message": message,
            "message": message,
        }

    def _get_active_item(self, items):
        lat0, lon0 = _resolve_coordinates(self.hass, self.location_source, self.tracker_entity_id)
        now = dt_util.utcnow()
        for item in items:
            if not _is_active(item, now):
                continue
            for polygon in _iter_polygons(item.get("area")):
                if not polygon:
                    continue

                if _point_in_polygon(lat0, lon0, polygon):
                    return item

                if _min_distance_to_polygon_m(lat0, lon0, polygon) <= self.max_radius_m:
                    return item
        return None


def _point_in_polygon(lat, lon, polygon):
    """Even-odd rule for point-in-polygon; polygon is list of (lat, lon)."""
    inside = False
    n = len(polygon)
    if n < 3:
        return False

    for i in range(n):
        lat1, lon1 = polygon[i]
        lat2, lon2 = polygon[(i + 1) % n]

        if ((lon1 > lon) != (lon2 > lon)):
            t = (lon - lon1) / (lon2 - lon1)
            intersect_lat = lat1 + t * (lat2 - lat1)
            if intersect_lat > lat:
                inside = not inside
    return inside


def _min_distance_to_polygon_m(lat, lon, polygon):
    """Return min distance in meters from point to polygon edges."""
    if len(polygon) == 1:
        p_lat, p_lon = polygon[0]
        return haversine(lat, lon, p_lat, p_lon)

    min_dist = float("inf")
    for i in range(len(polygon)):
        a_lat, a_lon = polygon[i]
        b_lat, b_lon = polygon[(i + 1) % len(polygon)]
        dist = _distance_point_to_segment_m(lat, lon, a_lat, a_lon, b_lat, b_lon)
        if dist < min_dist:
            min_dist = dist
    return min_dist


def _distance_point_to_segment_m(lat, lon, a_lat, a_lon, b_lat, b_lon):
    """Approx distance from point to segment using local equirectangular projection."""
    R = 6371000
    lat0 = math.radians(lat)

    ax = math.radians(a_lon - lon) * math.cos(lat0) * R
    ay = math.radians(a_lat - lat) * R
    bx = math.radians(b_lon - lon) * math.cos(lat0) * R
    by = math.radians(b_lat - lat) * R

    vx = bx - ax
    vy = by - ay
    denom = vx * vx + vy * vy
    if denom == 0:
        return math.hypot(ax, ay)

    t = max(0, min(1, - (ax * vx + ay * vy) / denom))
    px = ax + t * vx
    py = ay + t * vy
    return math.hypot(px, py)


def _iter_polygons(area):
    """Yield polygons from the API 'area' field, tolerating strings or lists."""
    if not area:
        return []

    polygons = []
    # API currently returns a list of strings, but accept a single string too
    entries = area if isinstance(area, (list, tuple)) else [area]
    for entry in entries:
        if isinstance(entry, str):
            polygon = []
            for pair in entry.strip().split():
                try:
                    plat, plon = map(float, pair.split(","))
                    polygon.append((plat, plon))
                except (TypeError, ValueError):
                    continue
            polygons.append(polygon)
    return polygons


def _is_active(item, now):
    """Return True when alert is active based on start/stop timestamps."""
    start = _parse_datetime(item.get("start_at"))
    stop = _parse_datetime(item.get("stop_at"))

    if start and now < start:
        return False
    if stop and now >= stop:
        return False
    return True


def _parse_datetime(value):
    """Parse ISO datetimes from API and ensure timezone awareness."""
    if not value:
        return None
    dt = dt_util.parse_datetime(value)
    if dt and dt.tzinfo is None:
        dt = dt.replace(tzinfo=dt_util.UTC)
    return dt


def _coerce_epoch_seconds(value):
    """Normalize seconds/milliseconds epoch to seconds (float)."""
    try:
        ts = float(value)
    except (TypeError, ValueError):
        return None
    if ts > 1e12:
        ts /= 1000.0
    return ts


def _format_epoch(value):
    """Convert epoch seconds/milliseconds to local ISO string."""
    ts = _coerce_epoch_seconds(value)
    if ts is None:
        return None
    dt = dt_util.utc_from_timestamp(ts)
    return dt_util.as_local(dt).isoformat()


def _prepare_burgernet_message(msg):
    return {
        "title": msg.get("title"),
        "body": msg.get("body"),
        "response_url": msg.get("responseUrl"),
        "message_type": msg.get("messageType"),
        "last_modified": _format_epoch(msg.get("lastModifiedTimestamp")),
        "speech_id": msg.get("speechId"),
    }


def _extract_burgernet_actions(payload):
    if isinstance(payload, dict):
        data = payload.get("actions")
        if isinstance(data, list):
            return data
    if isinstance(payload, list):
        return payload
    return []


def _prepare_burgernet_action(action, lat0, lon0, max_radius_m):
    area = action.get("area") or {}
    center_lat = area.get("lat")
    center_lng = area.get("lng")
    if center_lat is None or center_lng is None:
        return None

    distance_m = haversine(lat0, lon0, center_lat, center_lng)
    if max_radius_m is not None and distance_m > max_radius_m:
        return None

    radius_m = area.get("radius")
    messages = action.get("messages") or []
    sorted_messages = sorted(messages, key=lambda m: m.get("lastModifiedTimestamp") or 0)
    latest = sorted_messages[-1] if sorted_messages else None
    action_id = action.get("id")

    status = "active" if action.get("active") else "closed"
    conversation_lines = [f"Status: {status}"]
    if action.get("municipality"):
        conversation_lines.append(f"Municipality: {action.get('municipality')}")
    if center_lat is not None and center_lng is not None:
        conversation_lines.append(f"Area: lat {center_lat}, lng {center_lng}, radius {radius_m} m")
    for msg in sorted_messages:
        ts_label = _format_epoch(msg.get("lastModifiedTimestamp"))
        prefix_bits = [b for b in [ts_label, msg.get("messageType")] if b]
        prefix = " | ".join(prefix_bits)
        body = msg.get("body") or msg.get("title") or ""
        line = f"{prefix}: {body}" if prefix else body
        if line:
            conversation_lines.append(line)
    if not action.get("active"):
        conversation_lines.append("Case closed.")
    conversation = "\n".join([line for line in conversation_lines if line])

    prepared_messages = [_prepare_burgernet_message(msg) for msg in sorted_messages]

    start_ts = _coerce_epoch_seconds(action.get("startTimestamp"))
    end_ts = _coerce_epoch_seconds(action.get("endTimestamp"))

    latest_message_text = None
    latest_message_type = None
    latest_message_time = None
    if latest:
        latest_message_text = latest.get("body") or latest.get("title")
        latest_message_type = latest.get("messageType")
        latest_message_time = _format_epoch(latest.get("lastModifiedTimestamp"))
        if status == "closed" and latest_message_text:
            latest_message_text = f"{latest_message_text} (case closed)"

    return {
        "id": action_id,
        "municipality": action.get("municipality"),
        "action_type": action.get("actionType"),
        "amber_alert": bool(action.get("amberAlert")),
        "active": bool(action.get("active")),
        "start_ts": start_ts,
        "end_ts": end_ts,
        "start": _format_epoch(action.get("startTimestamp")),
        "end": _format_epoch(action.get("endTimestamp")),
        "latest_message": latest_message_text,
        "latest_message_type": latest_message_type,
        "latest_message_time": latest_message_time,
        "messages": prepared_messages,
        "conversation": conversation,
        "area": {
            "lat": center_lat,
            "lng": center_lng,
            "radius": radius_m,
            "distance_m": distance_m,
        },
    }


def _prepare_burgernet_actions(payload, lat0, lon0, max_radius_m):
    actions = []
    for action in _extract_burgernet_actions(payload):
        prepared = _prepare_burgernet_action(action, lat0, lon0, max_radius_m)
        if prepared:
            actions.append(prepared)
    actions.sort(key=lambda a: a.get("start_ts") or 0, reverse=True)
    return actions
