"""Ingress-only aiohttp app. Runs outside Home Assistant Core."""
import argparse
import asyncio
import json
import logging
import os
import sys
import html
from pathlib import Path

from aiohttp import ClientSession, ClientTimeout, web, WSMsgType

from .engine import Engine, URLS
from .bridge import Bridge
from .supervisor import Supervisor

_LOGGER = logging.getLogger(__name__)
SERVICE = web.AppKey('service', object)


class Service:
    def __init__(self, engine, supervisor, session, poll_seconds=120, entity_id=''):
        self.engine, self.supervisor, self.session = engine, supervisor, session
        self.poll_seconds, self.entity_id = poll_seconds, entity_id
        self.lock = asyncio.Lock()
        self.clients = set()
        self.bridge = Bridge(engine, supervisor, self.lock, self.persist, self.broadcast)

    async def persist(self):
        # Call under the lock; serialization and atomic disk writes run off-loop.
        await asyncio.to_thread(self.engine.save)

    async def broadcast(self):
        payload = json.dumps(self.engine.snapshot(), ensure_ascii=False, allow_nan=False)
        for client in tuple(self.clients):
            try:
                await asyncio.wait_for(client.send_str(payload), 3)
            except (ConnectionError, RuntimeError, TimeoutError):
                self.clients.discard(client)
                await client.close()

    async def fetch(self, url):
        try:
            async with self.session.get(url, headers={'Accept': 'application/json'}) as response:
                response.raise_for_status()
                return await response.json()
        except Exception as err:
            return err

    async def poll(self):
        while True:
            results = await asyncio.gather(*(self.fetch(url) for url in URLS.values()))
            async with self.lock:
                self.engine.ingest(dict(zip(URLS, results)))
                await self.persist()
            self.bridge.changed.set()
            await self.broadcast()
            await asyncio.sleep(self.poll_seconds)

    async def follow_location(self):
        while True:
            try:
                location = await self.supervisor.location(self.entity_id)
            except Exception:
                location = {**self.engine.location, 'ok': False, 'label': 'Home Assistant-locatie niet beschikbaar'}
            async with self.lock:
                self.engine.set_location(location)
                self.engine.reconcile()
                await self.persist()
            self.bridge.changed.set()
            await self.broadcast()
            await asyncio.sleep(15)

    async def deliver_events(self):
        while True:
            async with self.lock:
                event = self.engine.outbox[0] if self.engine.outbox else None
            if event:
                try:
                    await self.supervisor.fire_event(event)
                except Exception:
                    await asyncio.sleep(10)
                    continue
                async with self.lock:
                    self.engine.outbox = [e for e in self.engine.outbox if e['event_id'] != event['event_id']]
                    await self.persist()
            else:
                await asyncio.sleep(1)


def create_app(service, static_path, local=False):
    @web.middleware
    async def ingress(request, handler):
        # Do not trust X-Forwarded-For: only Supervisor's actual peer may enter.
        allowed = {'127.0.0.1', '::1'} if local else {'172.30.32.2'}
        if request.remote not in allowed:
            raise web.HTTPForbidden(text='Use Home Assistant ingress')
        if request.method not in ('GET', 'HEAD') and request.headers.get('X-NL-Alert-Request') != 'dashboard':
            raise web.HTTPForbidden(text='Missing dashboard request header')
        response = await handler(request)
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['Cache-Control'] = 'no-store'
        return response

    app = web.Application(middlewares=[ingress], client_max_size=128 * 1024)
    app[SERVICE] = service

    async def index(request):
        base = request.headers.get('X-Ingress-Path', '/')
        if not base.startswith('/') or base.startswith('//'):
            raise web.HTTPBadRequest(text='Invalid ingress path')
        template = await asyncio.to_thread((Path(static_path) / 'index.html').read_text, encoding='utf-8')
        return web.Response(text=template.replace('__BASE__', html.escape(base.rstrip('/') + '/', quote=True)), content_type='text/html')

    async def bundle(request):
        return web.FileResponse(Path(static_path) / 'nl-alert-panel.js')

    async def state(request):
        return web.json_response(service.engine.snapshot())

    async def zones(request):
        try:
            payload = await request.json()
            async with service.lock:
                service.engine.replace_zones(payload['zones'])
                await service.persist()
        except (ValueError, KeyError, TypeError):
            raise web.HTTPBadRequest(text='Invalid alert areas') from None
        service.bridge.changed.set()
        await service.broadcast()
        return web.json_response(service.engine.snapshot())

    async def socket(request):
        ws = web.WebSocketResponse(heartbeat=25)
        await ws.prepare(request)
        service.clients.add(ws)
        try:
            await ws.send_json(service.engine.snapshot())
            async for message in ws:
                if message.type == WSMsgType.ERROR:
                    break
        finally:
            service.clients.discard(ws)
        return ws

    async def cleanup(app):
        for ws in tuple(service.clients):
            await ws.close(code=1001, message=b'App stopping')

    app.router.add_get('/', index)
    app.router.add_get('/api/state', state)
    app.router.add_get('/api/ws', socket)
    app.router.add_post('/api/zones', zones)
    app.router.add_get('/nl-alert-panel.js', bundle)
    app.on_shutdown.append(cleanup)
    return app


async def run(args):
    path = Path(args.data_dir)
    options_file = path / 'options.json'
    options = json.loads(options_file.read_text()) if options_file.exists() else {}
    token = os.environ.get('SUPERVISOR_TOKEN', '')
    if not token and not args.local:
        raise RuntimeError('SUPERVISOR_TOKEN is required; install through Home Assistant Apps')
    async with ClientSession(timeout=ClientTimeout(total=20)) as session:
        engine = Engine(path / 'state.json', options.get('default_radius_km', 5))
        supervisor = Supervisor(session, token)
        service = Service(engine, supervisor, session, options.get('poll_seconds', 120), options.get('location_entity', ''))
        app = create_app(service, Path(__file__).resolve().parents[1] / 'www', args.local)
        runner = web.AppRunner(app, access_log=None)
        await runner.setup()
        await web.TCPSite(runner, '127.0.0.1' if args.local else '0.0.0.0', args.port).start()
        _LOGGER.info('NL Alert app listening on port %s', args.port)
        tasks = [asyncio.create_task(job()) for job in (service.poll, service.follow_location, service.deliver_events, service.bridge.run)]
        try:
            # A failed worker must fail the process rather than leave frozen sensors.
            done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
            for task in done:
                task.result()
        finally:
            for task in tasks:
                task.cancel()
            await asyncio.gather(*tasks, return_exceptions=True)
            await runner.cleanup()


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--local', action='store_true', help='Development only: bind to localhost without Supervisor')
    parser.add_argument('--data-dir', default='/data')
    parser.add_argument('--port', default=8099, type=int)
    args = parser.parse_args()
    logging.basicConfig(level=logging.INFO)
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    try:
        asyncio.run(run(args))
    except KeyboardInterrupt:
        pass
