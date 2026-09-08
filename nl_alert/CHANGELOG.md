# 4.0.2

- Optional direct MQTT configuration when Supervisor service discovery fails.
- Report the failed MQTT stage and Supervisor HTTP status without exposing credentials.
- Default feed refresh interval is three minutes; dashboard shows the configured interval.
- MQTT availability heartbeat remains independent of feed polling.

# 4.0.1

- Send an origin-only Referer for OpenStreetMap tiles, including through ingress.
- Sonar rings for selected alerts and the location tracker.
- Animated frosted detail panel accent for active, current alerts while connected.
- Respect reduced-motion preferences.

# 4.0.0

- Standalone Home Assistant app with App Store repository packaging and ingress.
- Dark React dashboard with OpenStreetMap, marker clusters and message history.
- Persistent radius areas with MQTT Discovery count and safety sensors.
- Multiple simultaneous alerts and durable `nl_alert_radius` automation events.
- Home Assistant home/person/device_tracker location through the Supervisor proxy.
- No custom integration or HACS installation required.
