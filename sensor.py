import asyncio
import math
import logging
from datetime import timedelta

import aiohttp
import async_timeout
from bs4 import BeautifulSoup

from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, CoordinatorEntity
from homeassistant.const import CONF_ENTITY_ID

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
    φ1, φ2 = math.radians(lat1), math.radians(lat2)
    Δφ = math.radians(lat2 - lat1)
    Δλ = math.radians(lon2 - lon1)
    a = math.sin(Δφ / 2) ** 2 + math.cos(φ1) * math.cos(φ2) * math.sin(Δλ / 2) ** 2
    return R * (2 * math.atan2(math.sqrt(a), math.sqrt(1 - a)))


async def async_setup_entry(hass, entry, async_add_entities):
    location_source = entry.data["location_source"]
    tracker_entity_id = entry.data.get(CONF_ENTITY_ID)
    # config is in km
    max_radius_m = entry.data.get("max_radius", 5) * 1000
    town = entry.data.get("burgernet_location")

    # AmberAlert JSON coordinator (Burgernet landactiehost API)
    async def _fetch_amber():
        async with async_timeout.timeout(15):
            async with aiohttp.ClientSession() as session:
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
            async with aiohttp.ClientSession() as session:
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
            async with aiohttp.ClientSession() as session:
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
        title = div.select_one("h3.action-message__title").get_text(strip=True)
        items = heading.select("span.action-message__heading-item")

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
        # max_radius currently unused, but kept for compatibility / future use
        self.max_radius_m = max_radius_m
        self._attr_name = "AmberAlert"
        self._attr_unique_id = "amber_alert"

    @property
    def available(self):
        # Always show this sensor as available
        return True

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
        return True

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
        return True

    @property
    def state(self):
        items = (self.coordinator.data or {}).get("data", [])
        return "unsafe" if self._get_active_item(items) else "safe"

    @property
    def extra_state_attributes(self):
        item = self._get_active_item((self.coordinator.data or {}).get("data", []))
        if not item:
            return {}
        return {
            "nl_alert_id": item.get("id"),
            "nl_alert_message": item.get("message"),
        }

    def _get_coordinates(self):
        state = self.hass.states.get(self.tracker_entity_id) if self.tracker_entity_id else None
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
                polygon = [
                    tuple(map(float, pair.split(",")))
                    for pair in poly_str.strip().split()
                ]
                if any(
                    haversine(lat0, lon0, lat, lon) <= self.max_radius_m
                    for lat, lon in polygon
                ):
                    return item
        return None
