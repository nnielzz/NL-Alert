# NL Alert app

## Install

1. In **Settings → Apps → App Store → ⋮ → Repositories**, add `https://github.com/nnielzz/NL-Alert`.
2. Refresh the store, select **NL Alert**, then **Install**. The app builds locally for amd64 or aarch64; the first installation can take a few minutes.
3. For sensors, install and start the official **Mosquitto broker** app. Under **Settings → Devices & services**, configure its discovered **MQTT** integration. Automatic setup uses Supervisor. If this fails or your broker runs elsewhere, configure the MQTT connection manually as described below.
4. Start **NL Alert**, enable **Start on boot** and **Show in sidebar**, and open **Open Web UI**.
5. The first alert area uses Home Assistant's home location. Edit it or create additional areas in the dashboard.

No HACS integration is required. The dashboard works without MQTT; **Sources & location** then explains that sensors are not connected. The app requests broker credentials from Supervisor and never sends them or the Supervisor token to the browser.

## Existing custom integration

Disable/remove the old NL-Alert integration in **Devices & services** to avoid duplicate polling and automations. Its sensors are replaced by new MQTT entities under the **NL Alert** device. Update automations to the new entity IDs. Saved areas from the earlier integration prototype are not automatically imported; recreate them in the app. If removing the HACS download, do so after disabling the old integration.

## App configuration

```yaml
location_entity: ""
poll_seconds: 180
default_radius_km: 5
```

- `location_entity`: leave empty for Home Assistant's home location, or enter e.g. `person.niels` / `device_tracker.phone`. Location refreshes every 15 seconds. If the configured tracker cannot provide a valid location, following areas become unavailable until it recovers; fixed areas still work.
- `poll_seconds`: 60–900 seconds between alert-feed refreshes; default 180.
- `default_radius_km`: only seeds the first area. Edit existing areas in the dashboard.

Restart the app after changing its configuration. Area edits in the dashboard apply immediately. Areas, alert history, discovery identifiers and pending events are stored in `/data/state.json` and survive app restarts/updates/backups. Deleting the app's data resets its identity and settings.

## Sensors and simultaneous alerts

MQTT Discovery creates a **binary sensor** and a **count sensor** for each area, plus a combined pair for all areas. Find their entity IDs under **Settings → Devices & services → MQTT → NL Alert**.

- Binary sensor: `on` while any current alert intersects the area.
- Count sensor: number of current alerts. The combined count deduplicates the same alert across overlapping areas.
- Attributes: `alerts`, `active_count`, `categories`, `zone_id`, `available`.
- Each item in `alerts` has `id`, `source`, `category`, `title`, `message`, `messages`, `place`, `updated_at`, and `active`.
- `category` is `burgernet`, `amber` or `nl_alert`. `message` is the latest text; `messages` contains the available conversation. The list supports every simultaneous matching alert.
- MQTT disconnect/app stop or an unavailable required feed marks entities unavailable. Unknown data must not be treated as “no danger”. Fixed areas do not depend on a tracker. Deleting an area removes its discovered sensor entities.

## Automations

The area editor includes copyable YAML with your app instance and area ID. Example:

```yaml
alias: NL Alert - new nearby incident
triggers:
  - trigger: event
    event_type: nl_alert_radius
    event_data:
      zone_id: home
      kind: enter
actions:
  - action: persistent_notification.create
    data:
      notification_id: "{{ trigger.event.data.instance_id }}_{{ trigger.event.data.zone_id }}_{{ trigger.event.data.alert_id }}"
      title: "{{ trigger.event.data.source }} - {{ trigger.event.data.title }}"
      message: "{{ trigger.event.data.message }}"
mode: queued
max: 50
```

`enter` means a new matching alert (including entering its area with your tracker). `update` is changed message content; `closed` is a confirmed closure. A second incident generates its own event even when the binary sensor was already on. Use `mode: queued` to process concurrent events. Event fields also include `event_id`, `created_at`, `instance_id` and `zone_name`.

Events are sent through Home Assistant's API and do not require MQTT. Pending events survive a restart and retry while Core is unavailable. Delivery is at least once: in the rare case of an ambiguous acknowledgement, the same `event_id` may be retried. A stable notification ID, as above, replaces the existing notification. For consequential actions, use `event_id` deduplication and/or a `created_at` freshness condition appropriate to your automation.

Creating/editing an area baselines alerts already loaded, so they appear on sensors immediately without replaying them as new events. Each source is kept separate: different NL-Alert IDs are not speculatively joined into one incident. A missing record is shown as stale, never fabricated as a confirmed closure. Historical records remain for seven days after last observed, with up to 100 messages per record.

Read all matching messages in a template (replace the entity ID):

```jinja
{% for alert in state_attr('binary_sensor.nl_alert_rondom_mij_actief', 'alerts') or [] %}
{{ alert.category }} — {{ alert.title }}
{{ alert.message }}
{% endfor %}
```

## Map

Clusters reflect active source/search/status filters and expand when clicked. Co-located markers spread out for individual selection. Radius circles and your location are not included in cluster counts. The optional browser-location button only affects the map; automations follow the configured Home Assistant location. National alerts are included only when explicitly identified as national by the feed and enabled for the area.

## Access and troubleshooting

- The dashboard is served through Home Assistant ingress on internal port 8099, with no host port exposed. It only accepts Supervisor's ingress peer. The sidebar is configured for administrators.
- If sensors are missing, check Mosquitto is running, MQTT is configured in Home Assistant, and the dashboard reports **Sensors connected**. The app retries automatically and republishes discovery when Home Assistant announces startup.
- If location is unavailable, check Home Assistant's home coordinates or the configured tracker attributes.
- If a feed is unavailable, the other feeds continue working and the last known records are marked stale.
- Map tiles require internet access to OpenStreetMap. Feed requests originate from the app container.

This is an additional alert overview, not a replacement for official NL-Alert reception on your phone.

## MQTT connection troubleshooting (4.0.2)

The dashboard and app logs now distinguish retrieving the MQTT service from connecting and publishing. A Supervisor HTTP error happens before connecting to Mosquitto; it does not mean your broker is stopped. Restart Mosquitto to register its service again, then restart NL Alert.

If automatic service lookup still fails, enter these options in the NL Alert app configuration (keep your existing location and radius settings):

```yaml
poll_seconds: 180
mqtt_host: core-mosquitto
mqtt_port: 1883
mqtt_username: YOUR_MQTT_USER
mqtt_password: YOUR_MQTT_PASSWORD
mqtt_tls: false
```

Use an existing MQTT account accepted by your broker. `core-mosquitto` is the internal hostname of the official Mosquitto app. For another broker, use its reachable hostname and appropriate port/TLS settings. TLS validates the certificate; use a hostname matching it. Credentials stay in the app backend and are never included in dashboard state. Leave `mqtt_host` empty to use Supervisor automatically.

On an existing installation, explicitly set `poll_seconds: 180`: Home Assistant preserves previously saved options when updating. MQTT availability is still refreshed at least every 30 seconds so sensors do not expire between feed refreshes.

## Message sensor for notifications and TTS (4.0.3)

Each area now also has a **melding** sensor, for example **Rondom mij melding**, under the NL Alert MQTT device. The combined **Alle gebieden melding** sensor covers the union of enabled areas and deduplicates overlaps.

- State: latest active matching alert title, capped at 255 characters.
- `title` / `message`: full title and description of that latest alert.
- `notification_text`: titles and descriptions of at most the three newest active matching alerts, ready for a notification or TTS message.
- `notification_alerts`: those same three alerts as structured objects, including category.
- Newest means most recently updated by the source. Only alerts matching the area's configured radius and filters are considered (including national alerts if enabled).
- `alerts` and `active_count` still include all active matching alerts.
- When there are no active alerts, state is `Geen actieve meldingen`, text is empty and the notification list is empty. Unavailable sources/locations retain the existing availability rules.

After updating/restarting the app, find the actual entity ID in **Settings → Devices & services → MQTT → NL Alert**. Replace the example ID below with your area's sensor ID. Use this in the message field of a notification or TTS action:

```jinja
{{ state_attr('sensor.nl_alert_rondom_mij_melding', 'notification_text') or '' }}
```

To trigger only when this text changes (including description changes with the same title), use the `notification_text` attribute rather than the sensor title. Example automation, using a built-in notification:

```yaml
alias: NL Alert - drie nieuwste meldingen
triggers:
  - trigger: state
    entity_id: sensor.nl_alert_rondom_mij_melding
    attribute: notification_text
conditions:
  - condition: template
    value_template: >-
      {{ trigger.to_state is not none
         and trigger.to_state.state not in ['unknown', 'unavailable']
         and (trigger.to_state.attributes.get('notification_text', '') | trim) != '' }}
actions:
  - action: persistent_notification.create
    data:
      title: NL Alert
      message: "{{ trigger.to_state.attributes.get('notification_text', '') }}"
mode: queued
max: 10
```

This announces the latest overview when its text changes, potentially including an alert announced earlier. It can also trigger after startup. For one notification per new incident or update, use the `nl_alert_radius` events documented above instead.
