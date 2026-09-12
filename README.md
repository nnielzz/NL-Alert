# NL Alert — Home Assistant-app

Burgernet, AMBER Alert en NL-Alert op één interactieve kaart van Nederland, met een donker dashboard, glazen panelen, clusters en instelbare radiusgebieden.

## Installatie

1. Voeg `https://github.com/nnielzz/NL-Alert` toe via **Instellingen → Apps → App Store → ⋮ → Repositories**.
2. Installeer **NL Alert**.
3. Start **Mosquitto broker** en configureer de **MQTT-integratie** voor sensoren.
4. Start NL Alert en kies **Open Web UI**. Stel je radiusgebieden in op de kaart.

De app vindt Mosquitto automatisch via Supervisor. De kaart werkt ook zonder MQTT. Meldingen worden standaard iedere drie minuten opgehaald.

## Sensoren en automatiseringen

Elk radiusgebied krijgt vijf MQTT-sensoren: **actief**, **aantal**, **titel**, **soort** en **inhoud**. De laatste drie tonen de meest recent bijgewerkte actieve melding binnen het gebied. Volledige berichttekst en gelijktijdige meldingen zijn beschikbaar in attributen.

Een storing bij één gegevensbron maakt de overige MQTT-meldingen niet onbeschikbaar. Attributen laten zien welke bronnen ontbreken. Zonder geldige trackerlocatie kan een meebewegend radiusgebied niet worden bepaald.

Met de [automatiseringsblueprint](nl_alert/blueprints/notification.yaml) maak je notificaties en optioneel TTS-acties. AI-samenvattingen vereisen een apart gekozen AI-agent én een expliciet ingeschakelde toestemmingsschakelaar. De app zelf doet geen AI-aanroepen.

Zie de [documentatie](nl_alert/DOCS.md) voor configuratie, attributen, AI-toestemming en voorbeelden.

## Ontwikkeling

```sh
npm ci --prefix frontend
npm test --prefix frontend
npm run build --prefix frontend
python -m pip install -r nl_alert/requirements.txt PyYAML==6.0.2
python -m unittest discover -s tests -v
```

De dashboarddemo start met `npm run dev --prefix frontend`.

Deze app is een aanvullend overzicht en vervangt officiële NL-Alert-ontvangst niet.
