# NL Alert

## Installatie

Voeg `https://github.com/nnielzz/NL-Alert` toe in **Instellingen → Apps → App Store → ⋮ → Repositories** en installeer NL Alert. Start Mosquitto broker en configureer de MQTT-integratie voor automatische sensoren. Start vervolgens NL Alert en open het dashboard.

## Configuratie

```yaml
location_entity: ""
poll_seconds: 180
default_radius_km: 5
mqtt_host: ""
```

Laat `location_entity` leeg voor je thuislocatie of vul een `person`- of `device_tracker`-entiteit in. Locatie wordt elke 15 seconden bijgewerkt. `default_radius_km` bepaalt alleen het eerste gebied; bestaande gebieden bewerk je op de kaart. De optionele browserlocatie beïnvloedt alleen de kaart.

Meldingen verversen volgens `poll_seconds` (60–900 seconden). Herstart de app na configuratiewijzigingen. Gebieden, berichtgeschiedenis en identifiers blijven bij een herstart bewaard.

## MQTT

Laat `mqtt_host` leeg om Mosquitto automatisch via Supervisor te vinden. Bij HTTP 400 in de servicefase: herstart Mosquitto en vervolgens NL Alert.

Een directe verbinding kan met `mqtt_host: core-mosquitto`, `mqtt_port: 1883`, `mqtt_username`, `mqtt_password` en `mqtt_tls: false`. Gebruik een door jouw broker geaccepteerd account. Voor een andere broker gebruik je diens adres en juiste poort/TLS-instellingen. Wachtwoorden blijven in de backend.

## Vijf sensoren per radiusgebied

- **Actief:** er is minimaal één actuele passende melding.
- **Aantal:** alle actuele passende meldingen in dit gebied.
- **Titel:** titel van de laatst bijgewerkte actuele melding.
- **Soort:** `amber`, `nl_alert`, `burgernet`, of `geen` bij een leeg gebied.
- **Inhoud:** tekst van diezelfde melding.

De titel-, soort- en inhoudsensor delen attributen `id`, `title`, `source`, `category`, `message`, `messages`, `place`, `updated_at`, `active`, `data_complete` en `unavailable_sources`. Sensorwaarden hebben maximaal 255 tekens; het attribuut `message` bevat de volledige inhoud. De eerste melding behoudt haar technische identifier met nummer 1, ook als de zichtbare naam geen nummer meer bevat.

Alleen meldingen waarvan de opgegeven locatie, cirkel of veelhoek je radius raakt, worden meegenomen. Landelijke meldingen zonder regionale afbakening worden niet in deze sensoren opgenomen. Meerdere gebieden hebben onafhankelijke sensoren. Actief/aantal bevatten daarnaast alle passende meldingen in `alerts` en maximaal de drie nieuwste in `notification_alerts` / `notification_text`.

Een bronstoring wordt weergegeven in `unavailable_sources`; `data_complete` wordt dan `false`. De MQTT-sensoren blijven werken met actuele gegevens uit bereikbare bronnen. Een aantal van nul bij onvolledige gegevens is dus geen bevestiging dat er nergens een melding is. Zijn er geen actuele berichten en ontbreken bronnen, dan toont de titel `Geen actuele meldingsgegevens`.

Een MQTT- of appuitval maakt sensoren wel onbeschikbaar. Ook een ontbrekende locatie maakt een meebewegend gebied onbeschikbaar: de radius kan dan niet betrouwbaar worden bepaald. Vaste gebieden blijven werken.

## Notificatie of TTS zonder AI

Zoek jouw inhoudsensor onder **Instellingen → Apparaten en diensten → MQTT → NL Alert**. Gebruik diens echte entity-ID in deze template:

```jinja
{{ state_attr('sensor.nl_alert_rondom_mij_melding_1_inhoud', 'message') or '' }}
```

Trigger op een wijziging van de inhoud, niet op het periodiek ontvangen van een MQTT-pakket. Gebruik `trigger.to_state.attributes.message` in een actie wanneer je precies het bericht van de trigger wilt verwerken.

## Blueprint met expliciete AI-toestemming

Importeer `https://github.com/nnielzz/NL-Alert/blob/main/nl_alert/blueprints/notification.yaml` via **Instellingen → Automatiseringen en scènes → Blueprints → Blueprint importeren**. Gebruik de juiste branch indien jouw repository geen `main` gebruikt.

1. Maak een aparte **Schakelaarhelper** (`input_boolean`), bijvoorbeeld **NL Alert AI toestaan — kan tokens kosten**. Laat deze uit. Als hij na iedere Home Assistant-start uit moet staan, definieer hem in YAML met `initial: false`.
2. Maak een automatisering vanuit de blueprint en selecteer de inhoudsensor van één radiusgebied en deze toestemmingshelper.
3. Laat het agentveld leeg voor notificaties zonder AI. Voor AI vul je een geconfigureerde `conversation`-agent in. Gebruik een agent zonder apparaatbediening.
4. Alleen wanneer de helper aan staat én een agent is ingevuld, wordt titel en maximaal 6000 tekens berichttekst naar die agent gestuurd. Dat kan tokens/geld kosten, afhankelijk van je provider. Toestemming geldt totdat je de schakelaar uitzet; een al verstuurd verzoek kan niet worden teruggedraaid.
5. De blueprint maakt een Home Assistant-notificatie. Bij **Extra acties** kun je een telefoonnotificatie of TTS-actie kiezen met `{{ alert_text }}` als tekst en eventueel `{{ alert_title }}` als titel.

De blueprint reageert op een gewijzigde melding-ID, titel of inhoud. Gewone herpublicaties, lege meldingen en herstel vanuit `unavailable`/`unknown` veroorzaken geen AI-aanroep. Als een eerdere melding weer de nieuwste wordt, kan die opnieuw worden gemeld. Er is geen harde tokenbudgetbewaking. Bij een mislukte of lege AI-reactie wordt de oorspronkelijke tekst gebruikt. Controleer het resultaat; een AI-samenvatting kan details missen.

De app schakelt AI niet zelf in, slaat geen AI-sleutel op en doet geen AI-verzoeken. De blueprint gebruikt Home Assistants [conversation.process](https://www.home-assistant.io/integrations/conversation/).

## Automatiseren per incident

Voor elke nieuwe melding in je gebied, ook als die niet de nieuwste sensorwaarde wordt, kun je het event `nl_alert_radius` gebruiken. De gebiedseditor bevat YAML met je `instance_id` en `zone_id`. `kind` is `enter`, `update` of `closed`; de payload bevat onder andere `alert_id`, `source`, `title`, `message` en `event_id`.

Events zijn onafhankelijk van MQTT. Ze worden na een tijdelijke verbindingsstoring opnieuw aangeboden en kunnen bij een onzekere ontvangst dubbel aankomen. Gebruik `event_id`-deduplicatie als je hier betaalde AI-acties aan koppelt. De meegeleverde blueprint gebruikt sensorwijzigingen.

## Kaart en bronnen

Clusters tellen meldingen volgens je filters en klappen open bij aanklikken. De bronnen zijn Burgernet, AMBER Alert en NL-Alert. Een ontbrekende melding wordt niet als bevestigde afloop verzonnen. De app bewaart maximaal zeven dagen historie sinds een melding voor het laatst is gezien.

OpenStreetMap-kaarttegels vereisen internet. Dit dashboard is een aanvullend overzicht en vervangt officiële NL-Alert-ontvangst niet.
