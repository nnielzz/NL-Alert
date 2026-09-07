"""MQTT Discovery entities, retained state and disconnect availability."""
import asyncio
import json
import logging
import ssl

import aiomqtt

_LOGGER = logging.getLogger(__name__)


def discovery(engine):
    prefix = f'nl_alert/{engine.instance_id}'
    device = {'identifiers': [f'nl_alert_app_{engine.instance_id}'], 'name': 'NL Alert',
        'manufacturer': 'nnielzz', 'model': 'NL Alert App', 'sw_version': '4.0.0'}
    result = {}
    for zone in [None, *(engine.zones or [])]:
        area = zone['id'] if zone else 'all'
        name = zone['name'] if zone else 'Alle gebieden'
        state_topic = f'{prefix}/areas/{area}/state'
        for component in ('binary_sensor', 'sensor'):
            uid = f'nl_alert_{engine.instance_id}_{area}_{component}'
            config = {'name': f'{name} ' + ('actief' if component == 'binary_sensor' else 'aantal'),
                'unique_id': uid, 'device': device, 'state_topic': state_topic,
                'json_attributes_topic': state_topic, 'availability_mode': 'all',
                'availability': [{'topic': f'{prefix}/availability'}, {'topic': f'{prefix}/areas/{area}/availability'}],
                'expire_after': 180, 'icon': 'mdi:radar'}
            if component == 'binary_sensor':
                config.update(device_class='safety', value_template="{{ 'ON' if value_json.active else 'OFF' }}")
            else:
                config.update(value_template='{{ value_json.active_count }}', unit_of_measurement='meldingen')
            result[f'homeassistant/{component}/{uid}/config'] = config
    return result


class Bridge:
    def __init__(self, engine, supervisor, lock, persist, broadcast):
        self.engine, self.supervisor, self.lock = engine, supervisor, lock
        self.persist, self.broadcast = persist, broadcast
        self.changed = asyncio.Event()

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
            try:
                service = await self.supervisor.mqtt()
                tls = ssl.create_default_context() if service.get('ssl') else None
                async with aiomqtt.Client(service['host'], port=int(service['port']),
                        username=service.get('username'), password=service.get('password'),
                        identifier=f'nl-alert-{self.engine.instance_id}', tls_context=tls, keepalive=30,
                        will=aiomqtt.Will(f'{prefix}/availability', 'offline', qos=1, retain=True)) as client:
                    await client.subscribe('homeassistant/status', qos=1)
                    listener = asyncio.create_task(self.listen_birth(client))
                    try:
                        while True:
                            self.changed.clear()
                            if listener.done():
                                await listener
                                raise ConnectionError('MQTT disconnected')
                            await self.publish(client)
                            self.engine.bridge = {'ok': True, 'message': 'Sensoren verbonden via MQTT'}
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
                _LOGGER.warning('MQTT unavailable (%s); retrying in 15 seconds', type(err).__name__)
                self.engine.bridge = {'ok': False, 'message': 'Sensoren niet verbonden. Start Mosquitto broker en configureer de MQTT-integratie in Home Assistant.'}
                await self.broadcast()
                await asyncio.sleep(15)
