"""Server-only access to the Supervisor and Core API proxies."""
from urllib.parse import quote

from .models import valid_point


class Supervisor:
    def __init__(self, session, token, base='http://supervisor'):
        self.session, self.token, self.base = session, token, base

    async def request(self, path, payload=None):
        if not self.token:
            raise ConnectionError('Home Assistant Supervisor is not connected')
        async with self.session.request('GET' if payload is None else 'POST', self.base + path,
                json=payload, headers={'Authorization': f'Bearer {self.token}'}) as response:
            response.raise_for_status()
            return await response.json()

    async def mqtt(self):
        result = await self.request('/services/mqtt')
        if result.get('result') != 'ok':
            raise ConnectionError('MQTT service unavailable')
        return result['data']

    async def location(self, entity_id):
        if entity_id:
            if not entity_id.startswith(('device_tracker.', 'person.')):
                raise ValueError('Location must be a person or device_tracker entity')
            result = await self.request('/core/api/states/' + quote(entity_id, safe=''))
            attrs = result.get('attributes', {})
            lat, lon = attrs.get('latitude'), attrs.get('longitude')
            if result.get('state') in ('unavailable', 'unknown') or not valid_point(lat, lon):
                raise ValueError('Tracker location is unavailable')
            return {'lat': lat, 'lon': lon, 'ok': True, 'label': attrs.get('friendly_name', 'Mijn locatie'), 'entity_id': entity_id}
        result = await self.request('/core/api/config')
        lat, lon = result.get('latitude'), result.get('longitude')
        if not valid_point(lat, lon):
            raise ValueError('Home location is unavailable')
        return {'lat': lat, 'lon': lon, 'ok': True, 'label': 'Thuislocatie', 'entity_id': None}

    async def fire_event(self, event):
        await self.request('/core/api/events/nl_alert_radius', event)
