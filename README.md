# NL Alert — Home Assistant App

Installable through **Home Assistant Settings → Apps → App Store**. This repository contains a standalone app with a dark React dashboard, OpenStreetMap clusters, Burgernet/AMBER/NL-Alert feeds, saved radius areas and automation sensors.

## Install

1. Upload the repository structure below to GitHub, including the built `nl_alert/www/nl-alert-panel.js`.
2. Add `https://github.com/nnielzz/NL-Alert` under **App Store → ⋮ → Repositories**, refresh the store and install **NL Alert**.
3. For sensors, install/start **Mosquitto broker** and configure Home Assistant's **MQTT integration**. The app discovers its broker credentials automatically.
4. Start NL Alert and open **Open Web UI** or enable **Show in sidebar**.

The dashboard works without MQTT; MQTT provides automatically discovered safety/count sensors for every radius, including the full list of simultaneous alerts. Home Assistant automation events are also available through the Core API.

**No HACS custom integration is required.** Disable the old integration before using this app. See [installation, migration and automation instructions](nl_alert/DOCS.md).

## Repository structure

```text
repository.yaml                 # App Store repository metadata
nl_alert/
  config.yaml                   # App Store app definition
  Dockerfile                    # Self-contained amd64/aarch64 container
  requirements.txt
  backend/                      # Standalone Python server + MQTT bridge
  www/                          # Built dashboard, required in GitHub
  DOCS.md
  README.md
  CHANGELOG.md
  translations/
frontend/                       # React source + package-lock.json
scripts/package_app.py          # Produce an upload-ready ZIP
 tests/                         # App and adapter tests
.github/workflows/validate.yml  # Tests + Linux container builds
```

Upload the **contents** of `dist/nl-alert-app-repository.zip` at the GitHub repository root, not the ZIP itself and not an extra enclosing directory. Remove the old root integration files (`hacs.json`, `manifest.json`, root Python files and old root `www/`). Do not upload `.venv`, `node_modules`, local app state, logs, caches or the `dist` folder.

## Development

```sh
npm ci --prefix frontend
npm run build --prefix frontend
python -m pip install -r nl_alert/requirements.txt PyYAML==6.0.2
python -m unittest discover -s tests -v
python scripts/package_app.py
```

`npm run dev --prefix frontend` opens the clearly labelled UI demo. To exercise the real standalone server locally:

```sh
python -m nl_alert.backend.server --local --data-dir .local-app --port 8099
```

Local mode binds only to loopback. It retrieves real feeds but has no Supervisor connection, home location, MQTT discovery or event delivery unless run as an installed Home Assistant app. Production refuses to start without a Supervisor token and accepts only the ingress gateway's actual peer IP; tokens and MQTT credentials never enter the frontend.

## Validation status

Backend adapter tests and app HTTP/WebSocket, persistence, event payload, ingress-access and MQTT publication-contract tests run locally. The React production build is included. Docker and Home Assistant Supervisor are unavailable in this development environment, so an actual App Store installation and live MQTT entity discovery must still be verified on Home Assistant. The included GitHub Actions workflow builds both supported container architectures after upload.

## Interfaces

- [Home Assistant app configuration](https://developers.home-assistant.io/docs/apps/configuration/)
- [Home Assistant ingress](https://developers.home-assistant.io/docs/apps/presentation/)
- [MQTT Discovery](https://www.home-assistant.io/integrations/mqtt/)

NL-Alert is obtained through public-warning.app and Burgernet actions through the existing external proxy. AMBER uses Burgernet's landactiehost feed. These feeds are not a replacement for official emergency notification delivery.
