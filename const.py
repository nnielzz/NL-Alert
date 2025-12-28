DOMAIN = "nl_alert"
PLATFORMS = ["sensor", "binary_sensor"]

# AmberAlert uses the Burgernet landactiehost API and a static poster URL
BURGERNET_API = "https://services.burgernet.nl/landactiehost/api/v1/alerts"
# Burgernet search (requires a town or ZIP code)
BURGERNET_SEARCH_URL = "https://www.burgernet.nl/zoeken?town={}"
# NL-Alert API
NL_ALERT_API = "https://api.public-warning.app/api/v1/providers/nl-alert/alerts"

# Reusable poster URL for missing child
STATIC_POSTER_URL = "https://www.burgernet.nl/static/posters/landelijk/1920x1080.jpg"
