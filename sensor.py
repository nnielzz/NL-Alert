import asyncio
import math
import logging
from datetime import timedelta

import async_timeout
from bs4 import BeautifulSoup

from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, CoordinatorEntity
from homeassistant.const import CONF_ENTITY_ID
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import (
    DOMAIN,
    BURGERNET_SEARCH_URL,
    BURGERNET_API,
    NL_ALERT_API,
    STATIC_POSTER_URL,
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


async def async_setup_entry(hass, entry, async_add_entities):
    config = {**entry.data, **entry.options}
    location_source = config.get("location_source", "home")
    tracker_entity_id = config.get(CONF_ENTITY_ID)
    max_radius_km = config.get("max_radius", 5)
    max_radius_m = max_radius_km * 1000
    town = config.get("burgernet_location", "")
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

    # Burgernet HTML scraper (latest single case)
    async def _fetch_burgernet():
        async with async_timeout.timeout(15):
            url = BURGERNET_SEARCH_URL.format(town)
            resp = await session.get(url)
            resp.raise_for_status()
            html = await resp.text()

        soup = BeautifulSoup(html, "html.parser")
        div = soup.select_one("div.c-action-message")
        if not div:
            return None

        link_tag = div.select_one("a.action-message__link")
        heading = div.select_one("span.action-message__heading")
        title_tag = div.select_one("h3.action-message__title")
        if not heading or not title_tag:
            return None

        title = title_tag.get_text(strip=True)
        items = heading.select("span.action-message__heading-item") if heading else []

        area = items[0].get_text(strip=True) if len(items) > 0 else None
        date = items[1].get_text(strip=True) if len(items) > 1 else None
        time = items[2].get_text(strip=True) if len(items) > 2 else None
        link = link_tag["href"] if link_tag else None

        return {
            "area": area,
            "date": date,
            "time": time,
            "title": title,
            "link": link,
        }

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

    async_add_entities(
        [
            AmberAlertSensor(
                coordinator_amber,
                hass,
                location_source,
                tracker_entity_id,
                max_radius_m,
            ),
            BurgernetSearchSensor(coordinator_burgernet),
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
    """Burgernet sensor: scrapes the latest case, unsafe if found."""

    def __init__(self, coordinator):
        super().__init__(coordinator)
        self._attr_name = "Burgernet"
        self._attr_unique_id = "burgernet_search"

    @property
    def available(self):
        return self.coordinator.last_update_success

    @property
    def state(self):
        return "unsafe" if self.coordinator.data else "safe"

    @property
    def extra_state_attributes(self):
        return self.coordinator.data or {}


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

    def _get_coordinates(self):
        state = None
        if self.location_source == "entity" and self.tracker_entity_id:
            state = self.hass.states.get(self.tracker_entity_id)

        if state and state.attributes.get("latitude") is not None:
            return state.attributes["latitude"], state.attributes["longitude"]
        return self.hass.config.latitude, self.hass.config.longitude

    def _get_active_item(self, items):
        lat0, lon0 = self._get_coordinates()
        for item in items:
            # skip ended alerts
            if item.get("stop_at"):
                continue
            for poly_str in item.get("area", []):
                polygon = []
                for pair in poly_str.strip().split():
                    try:
                        plat, plon = map(float, pair.split(","))
                        polygon.append((plat, plon))
                    except (TypeError, ValueError):
                        continue

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
