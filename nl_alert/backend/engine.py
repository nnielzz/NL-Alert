"""Persistent app state, radius matching and a durable automation outbox."""
import json
import os
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path

from .models import normalize, evaluate, matches, valid_point
from .validation import validate_zones

URLS = {
    'burgernet': 'https://www.landelijkemeldkamer.org/burgernet/burgernet-api/v2/actions',
    'amber': 'https://services.burgernet.nl/landactiehost/api/v1/alerts',
    'nl_alert': 'https://api.public-warning.app/api/v1/providers/nl-alert/alerts',
}


def utcnow():
    return datetime.now(timezone.utc)


class Engine:
    def __init__(self, path, default_radius=5):
        self.path = Path(path)
        saved = json.loads(self.path.read_text()) if self.path.exists() else {}
        self.instance_id = saved.get('instance_id', uuid.uuid4().hex[:12])
        self.zones = saved.get('zones')
        self.default_radius = default_radius
        self.alerts = saved.get('alerts', {})
        for alert in self.alerts.values():
            alert['stale'] = True
        self.seen = saved.get('seen', {})
        self.outbox = saved.get('outbox', [])
        self.discovery_topics = set(saved.get('discovery_topics', []))
        self.location = {**saved.get('location', {'lat': None, 'lon': None}), 'ok': False, 'label': 'Locatie nog niet beschikbaar'}
        self.sources = {s: {'ok': False} for s in URLS}
        self.updated_at = None
        self.bridge = {'ok': False, 'message': 'MQTT verbinden…'}

    def save(self):
        self.path.parent.mkdir(parents=True, exist_ok=True)
        content = json.dumps({'instance_id': self.instance_id, 'zones': self.zones, 'alerts': self.alerts,
            'seen': self.seen, 'outbox': self.outbox, 'location': self.location,
            'discovery_topics': sorted(self.discovery_topics)}, ensure_ascii=False, allow_nan=False)
        temp = self.path.with_suffix('.tmp')
        with temp.open('w', encoding='utf-8') as stream:
            stream.write(content)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temp, self.path)

    def set_location(self, location):
        self.location = location
        if self.zones is None and location.get('ok') and valid_point(location.get('lat'), location.get('lon')):
            self.zones = validate_zones([{'id': 'home', 'name': 'Rondom mij', 'lat': location['lat'], 'lon': location['lon'],
                'radius_km': self.default_radius, 'follow_location': True, 'enabled': True, 'include_national': True, 'sources': list(URLS)}])

    def ingest(self, results, now=None):
        now = now or utcnow()
        for source, payload in results.items():
            try:
                if isinstance(payload, Exception):
                    raise payload
                records = normalize(source, payload, now)
            except Exception:
                self.sources[source] = {**self.sources[source], 'ok': False}
                for a in self.alerts.values():
                    if a['feed'] == source:
                        a['stale'] = True
                continue
            self.sources[source] = {'ok': True, 'updated_at': now.isoformat()}
            for a in self.alerts.values():
                if a['feed'] == source:
                    a['stale'] = True
            for alert in records:
                old = self.alerts.get(alert['id'], {})
                messages = {json.dumps(m, sort_keys=True): m for m in old.get('messages', []) + alert['messages']}
                alert['messages'] = sorted(messages.values(), key=lambda m: m.get('time') or '')[-100:]
                alert['message'] = alert['messages'][-1]['body'] if alert['messages'] else ''
                self.alerts[alert['id']] = {**alert, 'last_seen': now.isoformat(), 'stale': False}
        cutoff = (now - timedelta(days=7)).isoformat()
        self.alerts = {key: value for key, value in self.alerts.items() if value.get('last_seen', '') >= cutoff}
        self.updated_at = now.isoformat()
        self.reconcile()

    def reconcile(self):
        for zone in self.zones or []:
            if zone['follow_location'] and not self.location.get('ok'):
                continue
            state, events = evaluate([zone], list(self.alerts.values()), self.location, self.seen)
            self.seen.update(state)
            self.outbox.extend({**e, 'instance_id': self.instance_id, 'event_id': uuid.uuid4().hex, 'created_at': utcnow().isoformat()} for e in events)

    def replace_zones(self, zones):
        zones = validate_zones(zones)
        old = {z['id']: z for z in self.zones or []}
        changed = {z['id'] for z in zones if z != old.get(z['id'])}
        self.seen = {k: v for k, v in self.seen.items() if k not in changed and any(z['id'] == k for z in zones)}
        self.outbox = [e for e in self.outbox if e['zone_id'] not in changed and any(z['id'] == e['zone_id'] for z in zones)]
        self.zones = zones
        self.reconcile()

    def area_state(self, zone=None):
        zones = [zone] if zone else self.zones or []
        enabled = [z for z in zones if z['enabled']]
        feeds = set(s for z in enabled for s in z['sources'])
        if 'amber' in feeds:
            feeds.add('burgernet')
        available = all(self.sources[s]['ok'] for s in feeds) and all(not z['follow_location'] or self.location.get('ok') for z in enabled)
        alerts = [a for a in self.alerts.values() if a['active'] and not a['stale'] and any(
            (not z['follow_location'] or self.location.get('ok')) and matches(z, a, self.location) for z in enabled)]
        fields = ('id', 'source', 'category', 'title', 'message', 'messages', 'place', 'updated_at', 'active')
        return {'active': bool(alerts), 'active_count': len(alerts), 'available': available,
            'zone_id': zone['id'] if zone else 'all', 'categories': sorted({a['source'] for a in alerts}),
            'alerts': [{k: a.get(k) for k in fields} for a in alerts]}

    def snapshot(self):
        return {'instance_id': self.instance_id, 'entry_id': self.instance_id,
            'alerts': sorted(self.alerts.values(), key=lambda a: a.get('updated_at') or '', reverse=True),
            'zones': self.zones or [], 'location': self.location, 'sources': self.sources,
            'updated_at': self.updated_at, 'bridge': self.bridge, 'pending_events': len(self.outbox)}
