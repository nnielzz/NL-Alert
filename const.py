DOMAIN = "nl_alert"
PLATFORMS = ["sensor", "binary_sensor"]

# AmberAlert uses the Burgernet landactiehost API and a static poster URL
BURGERNET_API = "https://services.burgernet.nl/landactiehost/api/v1/alerts"
# Burgernet actions (v2) for location-based filtering (no API key required)
BURGERNET_ACTIONS_API = "https://www.landelijkemeldkamer.org/burgernet/burgernet-api/v2/actions"
# NL-Alert API
NL_ALERT_API = "https://api.public-warning.app/api/v1/providers/nl-alert/alerts"

# Reusable poster URL for missing child
STATIC_POSTER_URL = "https://www.burgernet.nl/static/posters/landelijk/1920x1080.jpg"

# Config keys
CONF_MAX_BURGERNET_ACTIONS = "max_burgernet_actions"
