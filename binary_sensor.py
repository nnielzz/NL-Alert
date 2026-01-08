import logging

from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.helpers.event import async_track_state_change_event

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass, entry, async_add_entities):
    """Set up the NL Active Alert binary sensor."""
    async_add_entities([NLActiveAlertBinarySensor(hass)], update_before_add=True)


class NLActiveAlertBinarySensor(BinarySensorEntity):
    """Binary sensor: unsafe when any underlying alert sensor is unsafe."""

    def __init__(self, hass):
        self.hass = hass
        self._attr_name = "NL Active Alert"
        self._attr_unique_id = "nl_active_alert"
        self._attr_device_class = "safety"

        # Listen for state changes on each sensor
        self._unsub = async_track_state_change_event(
            hass,
            [
                "sensor.amber_alert",
                "sensor.burgernet_search",
                "sensor.nl_alert",
            ],
            self._state_listener,
        )

    def _state_listener(self, event):
        """Trigger an update when any sensor changes."""
        self.hass.loop.call_soon_threadsafe(self.async_write_ha_state)

    @property
    def is_on(self) -> bool:
        """Return True (unsafe) if any sensor reports 'unsafe'."""
        for entity in [
            "sensor.amber_alert",
            "sensor.burgernet_search",
            "sensor.nl_alert",
        ]:
            state = self.hass.states.get(entity)
            if state and state.state == "unsafe":
                return True
        return False

    async def async_will_remove_from_hass(self):
        """Clean up listener on unload."""
        if self._unsub:
            self._unsub()
