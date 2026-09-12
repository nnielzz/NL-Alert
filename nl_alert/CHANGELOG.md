# 4.0.6

- Five MQTT entities per area, with only the most recent alert's title, source and content.
- Source outages no longer propagate to MQTT availability; completeness and failed sources are exposed as attributes.
- Optional notification blueprint with explicit AI consent and original-text fallback.
- Documentation focused on installation and current functionality.

# 4.0.5

- Publish only per-area MQTT entities, with separate title, source and content sensors for each of the three newest active matching alerts.
- Automatically remove old combined-area and single-message discovery entities; retain per-area active/count IDs.
- Full content remains in attributes; sensor states are capped at 255 characters.
- Exclude national-only alerts from radius sensor values.
- Derive missing/generic Burgernet titles from actual message text.
- Blue Burgernet markers, filters and detail accents.

# 4.0.4

- Preserve map markers across live data refreshes.
- Replace asynchronous cluster selection zoom with synchronous, guarded marker reveal to prevent stale-parent crashes.
- Avoid recentering a selected alert on every background update.
- Keep cluster changes synchronous; retain sonar and panel animations.
- Detach WebSocket callbacks when the dashboard is unmounted.

# 4.0.3

- MQTT message sensor per radius area and for all areas combined.
- Sensor state shows the latest active alert title; attributes retain full title and message.
- notification_text and notification_alerts contain at most the three most recently updated active matching alerts.
- Existing counts and alerts attributes continue to include all active matching alerts.

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
