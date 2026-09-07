"""Standalone app contracts: persistent state, HTTP/WS, MQTT and Supervisor."""
import asyncio
import json
import tempfile
import unittest
from pathlib import Path

from aiohttp import ClientSession, web
from aiohttp.test_utils import TestClient, TestServer

from nl_alert.backend.engine import Engine
from nl_alert.backend.server import Service, create_app
from nl_alert.backend.bridge import discovery
from nl_alert.backend.supervisor import Supervisor
from nl_alert.backend.validation import validate_zones
from test_models import ZONE, LOCATION, action, NOW


def setup_engine(path):
    engine = Engine(path)
    engine.set_location({**LOCATION, 'ok': True, 'label': 'Test home'})
    engine.ingest({'burgernet': {'actions': []}, 'amber': [], 'nl_alert': {'data': []}}, NOW)
    return engine


class EngineTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent)
        self.addCleanup(self.tmp.cleanup)
        self.path = Path(self.tmp.name) / 'state.json'
        self.engine = setup_engine(self.path)

    def test_simultaneous_alerts_counts_and_event_payloads(self):
        self.engine.ingest({'burgernet': {'actions': [action(1), action(2)]}}, NOW)
        state = self.engine.area_state(self.engine.zones[0])
        self.assertTrue(state['available'])
        self.assertTrue(state['active'])
        self.assertEqual(state['active_count'], 2)
        self.assertEqual(len(state['alerts']), 2)
        self.assertEqual(state['categories'], ['burgernet'])
        self.assertEqual(len(self.engine.outbox), 2)
        self.assertEqual(self.engine.outbox[0]['message'], 'Startbericht')

    def test_overlapping_zones_do_not_double_count_global_sensor(self):
        self.engine.replace_zones([ZONE, {**ZONE, 'id': 'work'}])
        self.engine.ingest({'burgernet': {'actions': [action(1)]}}, NOW)
        self.assertEqual(self.engine.area_state()['active_count'], 1)
        self.assertEqual(len(self.engine.outbox), 2)

    def test_persistence_restart_and_no_repeat(self):
        self.engine.ingest({'burgernet': {'actions': [action(1)]}}, NOW)
        self.engine.outbox.clear()
        self.engine.save()
        restarted = Engine(self.path)
        self.assertEqual(restarted.instance_id, self.engine.instance_id)
        self.assertFalse(restarted.area_state()['available'])
        restarted.set_location({**LOCATION, 'ok': True})
        restarted.ingest({'burgernet': {'actions': [action(1)]}, 'amber': [], 'nl_alert': {'data': []}}, NOW)
        self.assertEqual(restarted.outbox, [])
        self.assertEqual(restarted.area_state()['active_count'], 1)

    def test_source_failure_is_unavailable_and_keeps_history(self):
        self.engine.ingest({'burgernet': {'actions': [action(1)]}}, NOW)
        self.engine.ingest({'burgernet': ConnectionError('offline')}, NOW)
        self.assertFalse(self.engine.area_state()['available'])
        self.assertTrue(self.engine.alerts['burgernet:1']['stale'])
        self.assertNotIn('closed', [e['kind'] for e in self.engine.outbox])

    def test_location_loss_only_affects_following_zones(self):
        self.engine.replace_zones([ZONE, {**ZONE, 'id': 'fixed', 'follow_location': False}])
        self.engine.set_location({**LOCATION, 'ok': False})
        self.assertFalse(self.engine.area_state(self.engine.zones[0])['available'])
        self.assertTrue(self.engine.area_state(self.engine.zones[1])['available'])

    def test_nan_duplicate_reserved_ids_and_empty_sources_rejected(self):
        for zones in ([{**ZONE,'lat':float('nan')}], [ZONE,ZONE], [{**ZONE,'id':'all'}], [{**ZONE,'sources':[]}]):
            with self.assertRaises(ValueError): validate_zones(zones)

    def test_discovery_has_stable_ids_and_dual_availability(self):
        configs = discovery(self.engine)
        self.assertEqual(len(configs), 4)
        for topic, config in configs.items():
            self.assertIn('unique_id', config)
            self.assertEqual(len(config['availability']), 2)
            self.assertEqual(config['availability_mode'], 'all')
            self.assertEqual(config['json_attributes_topic'], config['state_topic'])

    def test_deleted_area_discards_unsent_events(self):
        self.engine.ingest({'burgernet': {'actions': [action(1)]}}, NOW)
        self.assertEqual(len(self.engine.outbox), 1)
        self.engine.replace_zones([])
        self.assertEqual(self.engine.outbox, [])


class AppTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.tmp = tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent)
        self.addCleanup(self.tmp.cleanup)
        self.engine = setup_engine(Path(self.tmp.name) / 'state.json')
        self.session = ClientSession()
        self.service = Service(self.engine, Supervisor(self.session, ''), self.session)
        self.static = Path('nl_alert/www')
        self.client = TestClient(TestServer(create_app(self.service, self.static, local=True)))
        await self.client.start_server()

    async def asyncTearDown(self):
        await self.client.close()
        await self.session.close()

    async def test_ingress_base_and_built_assets(self):
        response = await self.client.get('/', headers={'X-Ingress-Path':'/api/hassio_ingress/test-token'})
        self.assertEqual(response.status, 200)
        self.assertIn('<base href="/api/hassio_ingress/test-token/">', await response.text())
        response = await self.client.get('/nl-alert-panel.js')
        self.assertEqual(response.status, 200)
        self.assertGreater(len(await response.read()), 1000)

    async def test_websocket_receives_saved_area_updates(self):
        socket = await self.client.ws_connect('/api/ws')
        snapshot = await socket.receive_json()
        self.assertEqual(snapshot['instance_id'], self.engine.instance_id)
        response = await self.client.post('/api/zones', json={'zones':[{**ZONE,'name':'Work'}]}, headers={'X-NL-Alert-Request':'dashboard'})
        self.assertEqual(response.status, 200)
        self.assertEqual((await socket.receive_json())['zones'][0]['name'], 'Work')
        self.assertEqual(Engine(self.engine.path).zones[0]['name'], 'Work')
        await socket.close()

    async def test_write_without_custom_header_is_rejected(self):
        response = await self.client.post('/api/zones', json={'zones':[]})
        self.assertEqual(response.status, 403)

    async def test_invalid_settings_leave_areas_unchanged(self):
        response = await self.client.post('/api/zones', json={'zones':[ZONE,ZONE]}, headers={'X-NL-Alert-Request':'dashboard'})
        self.assertEqual(response.status, 400)
        self.assertEqual(len(self.engine.zones), 1)

    async def test_production_rejects_direct_access_and_spoofed_proxy_header(self):
        client = TestClient(TestServer(create_app(self.service, self.static)))
        await client.start_server()
        try:
            response = await client.get('/api/state', headers={'X-Forwarded-For':'172.30.32.2'})
            self.assertEqual(response.status, 403)
        finally:
            await client.close()

    async def test_mqtt_retained_discovery_state_and_deletion(self):
        messages = []
        class Client:
            async def publish(self, topic, payload, **kwargs):
                messages.append((topic,payload,kwargs))
        await self.service.bridge.publish(Client())
        old = set(self.engine.discovery_topics)
        self.assertEqual(len(old), 4)
        self.assertTrue(all(m[2]['retain'] for m in messages))
        self.engine.replace_zones([])
        messages.clear()
        await self.service.bridge.publish(Client())
        removed = [m[0] for m in messages if m[1] == '']
        self.assertEqual(len(removed), 2)
        self.assertTrue(set(removed).issubset(old))

    async def test_supervisor_location_service_and_events(self):
        requests = []
        async def handler(request):
            self.assertEqual(request.headers['Authorization'], 'Bearer test-token')
            requests.append(request.path)
            if request.path == '/services/mqtt':
                return web.json_response({'result':'ok','data':{'host':'broker','port':1883}})
            if request.path == '/core/api/config':
                return web.json_response({'latitude':52.09,'longitude':5.12})
            self.assertEqual((await request.json())['message'], 'Test')
            return web.json_response({'message':'Event fired.'})
        app = web.Application()
        app.router.add_route('*','/{path:.*}',handler)
        server = TestServer(app)
        await server.start_server()
        try:
            supervisor = Supervisor(self.session, 'test-token', str(server.make_url('/')).rstrip('/'))
            self.assertEqual((await supervisor.mqtt())['host'], 'broker')
            self.assertTrue((await supervisor.location(''))['ok'])
            await supervisor.fire_event({'message':'Test'})
            self.assertIn('/core/api/events/nl_alert_radius', requests)
        finally:
            await server.close()


if __name__ == '__main__': unittest.main()
