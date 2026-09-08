"""MQTT Discovery entities, retained state and disconnect availability."""
import asyncio
import json
import logging
import ssl
import socket

import aiomqtt
from aiohttp import ClientResponseError

_LOGGER = logging.getLogger(__name__)


def discovery(engine):
    prefix = f'nl_alert/{engine.instance_id}'
    device = {'identifiers': [f'nl_alert_app_{engine.instance_id}'], 'name': 'NL Alert',
        'manufacturer': 'nnielzz', 'model': 'NL Alert App', 'sw_version': '4.0.4'}
    result = {}
    for zone in [None, *(engine.zones or [])]:
        area = zone['id'] if zone else 'all'
        name = zone['name'] if zone else 'Alle gebieden'
        state_topic = f'{prefix}/areas/{area}/state'
        for kind, component, label in (('binary_sensor', 'binary_sensor', 'actief'),
                ('sensor', 'sensor', 'aantal'), ('message', 'sensor', 'melding')):
            uid = f'nl_alert_{engine.instance_id}_{area}_{kind}'
            config = {'name': f'{name} {label}',
                'unique_id': uid, 'device': device, 'state_topic': state_topic,
                'json_attributes_topic': state_topic, 'availability_mode': 'all',
                'availability': [{'topic': f'{prefix}/availability'}, {'topic': f'{prefix}/areas/{area}/availability'}],
                'expire_after': 180, 'icon': 'mdi:radar'}
            if component == 'binary_sensor':
                config.update(device_class='safety', value_template="{{ 'ON' if value_json.active else 'OFF' }}")
            elif kind == 'sensor':
                config.update(value_template='{{ value_json.active_count }}', unit_of_measurement='meldingen')
            else:
                config.update(value_template='{{ value_json.title[:255] }}', icon='mdi:message-alert-outline')
            result[f'homeassistant/{component}/{uid}/config'] = config
    return result


class Bridge:
    def __init__(self, engine, supervisor, lock, persist, broadcast, options=None):
        self.engine, self.supervisor, self.lock = engine, supervisor, lock
        self.persist, self.broadcast = persist, broadcast
        self.changed = asyncio.Event()
        self.options = options or {}

    async def connection_settings(self):
        if self.options.get('mqtt_host', '').strip():
            return {'host': self.options['mqtt_host'].strip(),
                'port': self.options.get('mqtt_port', 1883),
                'username': self.options.get('mqtt_username') or None,
                'password': self.options.get('mqtt_password') or None,
                'ssl': self.options.get('mqtt_tls', False)}
        return await self.supervisor.mqtt()

    @staticmethod
    def failure_message(err, stage):
        if stage == 'service':
            if isinstance(err, ClientResponseError):
                return f'Supervisor geeft HTTP {err.status} bij het ophalen van MQTT. Controleer Mosquitto of stel mqtt_host in de appconfiguratie in.'
            return 'Geen MQTT-service ontvangen van Supervisor. Controleer Mosquitto of stel mqtt_host in de appconfiguratie in.'
        if isinstance(err, ssl.SSLError):
            return 'MQTT TLS-certificaat of beveiligde verbinding ongeldig. Controleer brokeradres, poort en certificaat.'
        if isinstance(err, socket.gaierror):
            return 'MQTT-brokeradres kan niet worden gevonden. Controleer mqtt_host en het netwerk.'
        if isinstance(err, aiomqtt.MqttCodeError):
            code = getattr(err.rc, 'value', err.rc)
            if code in (4, 5, 134, 135):
                return 'MQTT weigert de aanmelding. Controleer de MQTT-gebruikersnaam en het wachtwoord.'
        if stage == 'publish':
            return 'MQTT verbonden, maar publiceren van sensoren mislukt. Controleer brokerrechten voor homeassistant/# en nl_alert/# en de verbinding.'
        return 'Verbinding met MQTT mislukt. Controleer brokeradres, poort, aanmeldgegevens en het Mosquitto-logboek.'

    async def publish(self, client):
        async with self.lock:
            config = discovery(self.engine)
            removed = self.engine.discovery_topics - config.keys()
            # Save attempted discovery before sending so a later deletion can clean up.
            self.engine.discovery_topics.update(config)
            await self.persist()
            states = [(z['id'] if z else 'all', self.engine.area_state(z)) for z in [None, *(self.engine.zones or [])]]
        for topic in removed:
            await client.publish(topic, '', qos=1, retain=True)
        for topic, payload in config.items():
            await client.publish(topic, json.dumps(payload), qos=1, retain=True)
        prefix = f'nl_alert/{self.engine.instance_id}'
        for area, state in states:
            await client.publish(f'{prefix}/areas/{area}/state', json.dumps(state, ensure_ascii=False), qos=1, retain=True)
            await client.publish(f'{prefix}/areas/{area}/availability', 'online' if state['available'] else 'offline', qos=1, retain=True)
        await client.publish(f'{prefix}/availability', 'online', qos=1, retain=True)
        async with self.lock:
            self.engine.discovery_topics.difference_update(removed)
            await self.persist()

    async def listen_birth(self, client):
        async for message in client.messages:
            if str(message.topic) == 'homeassistant/status' and bytes(message.payload) == b'online':
                self.changed.set()

    async def run(self):
        prefix = f'nl_alert/{self.engine.instance_id}'
        while True:
            stage = 'service'
            try:
                service = await self.connection_settings()
                stage = 'connect'
                tls = ssl.create_default_context() if service.get('ssl') else None
                async with aiomqtt.Client(service['host'], port=int(service['port']),
                        username=service.get('username'), password=service.get('password'),
                        identifier=f'nl-alert-{self.engine.instance_id}', tls_context=tls, keepalive=30,
                        will=aiomqtt.Will(f'{prefix}/availability', 'offline', qos=1, retain=True)) as client:
                    await client.subscribe('homeassistant/status', qos=1)
                    stage = 'publish'
                    listener = asyncio.create_task(self.listen_birth(client))
                    try:
                        while True:
                            self.changed.clear()
                            if listener.done():
                                await listener
                                raise ConnectionError('MQTT disconnected')
                            await self.publish(client)
                            self.engine.bridge = {'ok': True, 'message': 'Sensoren gepubliceerd via MQTT. Vind NL Alert onder de MQTT-integratie.'}
                            await self.broadcast()
                            try:
                                await asyncio.wait_for(self.changed.wait(), 30)
                            except TimeoutError:
                                pass
                    finally:
                        listener.cancel()
                        await asyncio.gather(listener, return_exceptions=True)
                        try:
                            await asyncio.wait_for(client.publish(f'{prefix}/availability', 'offline', qos=1, retain=True), 3)
                        except Exception:
                            pass
            except asyncio.CancelledError:
                raise
            except Exception as err:
                # Never include service credentials in logs or dashboard responses.
                message = self.failure_message(err, stage)
                _LOGGER.warning('MQTT unavailable [%s] (%s): %s Retrying in 15 seconds', stage, type(err).__name__, message)
                self.engine.bridge = {'ok': False, 'stage': stage, 'message': message}
                await self.broadcast()
                await asyncio.sleep(15)
