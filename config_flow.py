import voluptuous as vol

from homeassistant import config_entries
from homeassistant.const import CONF_ENTITY_ID
from homeassistant.helpers.selector import (
    SelectSelector,
    SelectSelectorConfig,
    EntitySelector,
    EntitySelectorConfig,
    NumberSelector,
    NumberSelectorConfig,
)
from .const import DOMAIN

STEP_USER_DATA_SCHEMA = vol.Schema({
    vol.Required(
        "location_source",
        default="home"
    ): SelectSelector(
        config=SelectSelectorConfig(
            mode="dropdown",
            options=[
                {"value": "home",   "label": "Use Home location"},
                {"value": "entity", "label": "Use a device_tracker entity"},
            ]
        )
    ),
    vol.Optional(
        CONF_ENTITY_ID,
    ): EntitySelector(
        config=EntitySelectorConfig(domain="device_tracker")
    ),
    vol.Optional(
        "max_radius (NL-ALERT)",
        default=5
    ): NumberSelector(
        config=NumberSelectorConfig(
            min=0,
            max=100,
            step=1,
            mode="box",
            unit_of_measurement="km",
        )
    ),
    vol.Required(
        "burgernet_location",
        default="Postcode of Plaats",
    ): str,
})


class NLAlertConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        if user_input is None:
            return self.async_show_form(
                step_id="user",
                data_schema=STEP_USER_DATA_SCHEMA,
            )

        if (
            user_input["location_source"] == "entity"
            and not user_input.get(CONF_ENTITY_ID)
        ):
            return self.async_show_form(
                step_id="user",
                data_schema=STEP_USER_DATA_SCHEMA,
                errors={CONF_ENTITY_ID: "required"},
            )

        # Title is hard-coded; user cannot change integration name
        return self.async_create_entry(
            title="NL-Alert",
            data=user_input,
        )

    @staticmethod
    def async_get_options_flow(config_entry):
        return NLAlertOptionsFlowHandler(config_entry)


class NLAlertOptionsFlowHandler(config_entries.OptionsFlow):
    def __init__(self, config_entry):
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        current = self.config_entry.options or self.config_entry.data
        schema = vol.Schema({
            vol.Required(
                "location_source",
                default=current.get("location_source", "home")
            ): SelectSelector(
                config=SelectSelectorConfig(
                    mode="dropdown",
                    options=[
                        {"value": "home",   "label": "Use Home location"},
                        {"value": "entity", "label": "Use a device_tracker entity"},
                    ]
                )
            ),
            vol.Optional(
                CONF_ENTITY_ID,
                default=current.get(CONF_ENTITY_ID)
            ): EntitySelector(
                config=EntitySelectorConfig(domain="device_tracker")
            ),
            vol.Optional(
                "max_radius",
                default=current.get("max_radius", 5)
            ): NumberSelector(
                config=NumberSelectorConfig(
                    min=0,
                    max=100,
                    step=1,
                    mode="box",
                    unit_of_measurement="km",
                )
            ),
            vol.Required(
                "burgernet_location",
                default=current.get("burgernet_location", "")
            ): str,
        })

        if user_input is None:
            return self.async_show_form(
                step_id="init",
                data_schema=schema,
            )

        if (
            user_input["location_source"] == "entity"
            and not user_input.get(CONF_ENTITY_ID)
        ):
            return self.async_show_form(
                step_id="init",
                data_schema=schema,
                errors={CONF_ENTITY_ID: "required"},
            )

        return self.async_create_entry(
            title="",
            data=user_input,
        )
