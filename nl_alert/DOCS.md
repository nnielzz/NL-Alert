# NL Alert app

## Install

1. In **Settings → Apps → App Store → ⋮ → Repositories**, add `https://github.com/nnielzz/NL-Alert`.
2. Refresh the store, select **NL Alert**, then **Install**. The app builds locally for amd64 or aarch64; the first installation can take a few minutes.
3. For sensors, install and start the official **Mosquitto broker** app. Under **Settings → Devices & services**, configure its discovered **MQTT** integration. If a broker was already configured outside Supervisor, this app currently needs a Supervisor-provided MQTT service; manual broker credentials are not supported.
4. Start **NL Alert**, enable **Start on boot** and **Show in sidebar**, and open **Open Web UI**.
5. The first alert area uses Home Assistant's home location. Edit it or create additional areas in the dashboard.

No HACS integration is required. The dashboard works without MQTT; **Sources & location** then explains that sensors are not connected. The app requests broker credentials from Supervisor and never sends them or the Supervisor token to the browser.

## Existing custom integration

Disable/remove the old NL-Alert integration in **Devices & services** to avoid duplicate polling and automations. Its sensors are replaced by new MQTT entities under the **NL Alert** device. Update automations to the new entity IDs. Saved areas from the earlier integration prototype are not automatically imported; recreate them in the app. If removing the HACS download, do so after disabling the old integration.

## App configuration

```yaml
location_entity: ""
poll_seconds: 120
default_radius_km: 5
```

- `location_entity`: leave empty for Home Assistant's home location, or enter e.g. `person.niels` / `device_tracker.phone`. Location refreshes every 15 seconds. If the configured tracker cannot provide a valid location, following areas become unavailable until it recovers; fixed areas still work.
- `poll_seconds`: 60–900 seconds between alert-feed refreshes; default 120.
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
