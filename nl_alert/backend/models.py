"""Pure source adapters and geographic helpers (no Home Assistant dependency)."""
import math
import logging
from datetime import datetime, timezone
_LOGGER = logging.getLogger(__name__)

def haversine(lat1, lon1, lat2, lon2):
    """Calculate distance (m) between two lat/lon points."""
    R = 6371000
    f1, f2 = math.radians(lat1), math.radians(lat2)
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin(dlon / 2) ** 2
    return R * (2 * math.atan2(math.sqrt(a), math.sqrt(1 - a)))


def _coerce_float(value, default=None):
    try:
        number = float(value)
        return number if math.isfinite(number) else default
    except (TypeError, ValueError):
        return default


def _coerce_bool(value):
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.strip().lower() in ("1", "true", "yes", "on")
    return bool(value)


def _point_in_polygon(lat, lon, polygon):
    """Even-odd rule for point-in-polygon; polygon is list of (lat, lon)."""
    inside = False
    n = len(polygon)
    if n < 3:
        return False

    for i in range(n):
        lat1, lon1 = polygon[i]
        lat2, lon2 = polygon[(i + 1) % n]

        if ((lon1 > lon) != (lon2 > lon)):
            t = (lon - lon1) / (lon2 - lon1)
            intersect_lat = lat1 + t * (lat2 - lat1)
            if intersect_lat > lat:
                inside = not inside
    return inside


def _min_distance_to_polygon_m(lat, lon, polygon):
    """Return min distance in meters from point to polygon edges."""
    if len(polygon) == 1:
        p_lat, p_lon = polygon[0]
        return haversine(lat, lon, p_lat, p_lon)

    min_dist = float("inf")
    for i in range(len(polygon)):
        a_lat, a_lon = polygon[i]
        b_lat, b_lon = polygon[(i + 1) % len(polygon)]
        dist = _distance_point_to_segment_m(lat, lon, a_lat, a_lon, b_lat, b_lon)
        if dist < min_dist:
            min_dist = dist
    return min_dist


def _distance_point_to_segment_m(lat, lon, a_lat, a_lon, b_lat, b_lon):
    """Approx distance from point to segment using local equirectangular projection."""
    R = 6371000
    lat0 = math.radians(lat)

    ax = math.radians(a_lon - lon) * math.cos(lat0) * R
    ay = math.radians(a_lat - lat) * R
    bx = math.radians(b_lon - lon) * math.cos(lat0) * R
    by = math.radians(b_lat - lat) * R

    vx = bx - ax
    vy = by - ay
    denom = vx * vx + vy * vy
    if denom == 0:
        return math.hypot(ax, ay)

    t = max(0, min(1, - (ax * vx + ay * vy) / denom))
    px = ax + t * vx
    py = ay + t * vy
    return math.hypot(px, py)


def _iter_polygons(area):
    """Yield polygons from the API 'area' field, tolerating strings or lists."""
    if not area:
        return []

    polygons = []
    # API currently returns a list of strings, but accept a single string too
    entries = area if isinstance(area, (list, tuple)) else [area]
    for entry in entries:
        if isinstance(entry, str):
            polygon = []
            for pair in entry.strip().split():
                try:
                    plat, plon = map(float, pair.split(","))
                    polygon.append((plat, plon))
                except (TypeError, ValueError):
                    continue
            polygons.append(polygon)
    return polygons


def _is_active(item, now):
    """Return True when alert is active based on start/stop timestamps."""
    start = _parse_datetime(item.get("start_at"))
    stop = _parse_datetime(item.get("stop_at"))

    if start and now < start:
        return False
    if stop and now >= stop:
        return False
    return True


def _parse_datetime(value):
    """Parse ISO datetimes from API and ensure timezone awareness."""
    if not value:
        return None
    try:
        dt = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError:
        return None
    if dt and dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


def _coerce_epoch_seconds(value):
    """Normalize seconds/milliseconds epoch to seconds (float)."""
    try:
        ts = float(value)
    except (TypeError, ValueError):
        return None
    if ts > 1e12:
        ts /= 1000.0
    return ts


def _format_epoch(value):
    """Convert epoch seconds/milliseconds to local ISO string."""
    ts = _coerce_epoch_seconds(value)
    if ts is None:
        return None
    dt = datetime.fromtimestamp(ts, timezone.utc)
    return dt.isoformat()


def _prepare_burgernet_message(msg):
    return {
        "title": msg.get("title"),
        "body": msg.get("body"),
        "response_url": msg.get("responseUrl"),
        "message_type": msg.get("messageType"),
        "last_modified": _format_epoch(msg.get("lastModifiedTimestamp")),
        "speech_id": msg.get("speechId"),
    }


def _extract_burgernet_actions(payload):
    if isinstance(payload, dict):
        for key in ("actions", "data", "items"):
            data = payload.get(key)
            if isinstance(data, list):
                return data
    if isinstance(payload, list):
        return payload
    return []


def _prepare_burgernet_action(action, lat0, lon0, max_radius_m):
    if not isinstance(action, dict):
        return None

    area = action.get("area") or {}
    if not isinstance(area, dict):
        return None

    center_lat = _coerce_float(area.get("lat", area.get("latitude")))
    center_lng = _coerce_float(area.get("lng", area.get("lon", area.get("longitude"))))
    if not valid_point(center_lat, center_lng):
        return None

    distance_m = haversine(lat0, lon0, center_lat, center_lng)
    radius_m = max(0, _coerce_float(area.get("radius"), 0))
    if max_radius_m is not None and distance_m > (max_radius_m + radius_m):
        return None

    messages = [
        message
        for message in (action.get("messages") or [])
        if isinstance(message, dict)
    ]
    sorted_messages = sorted(
        messages,
        key=lambda m: _coerce_epoch_seconds(m.get("lastModifiedTimestamp")) or 0,
    )
    latest = sorted_messages[-1] if sorted_messages else None
    action_id = action.get("id")
    active = _coerce_bool(action.get("active"))

    status = "active" if active else "closed"
    conversation_lines = [f"Status: {status}"]
    if action.get("municipality"):
        conversation_lines.append(f"Municipality: {action.get('municipality')}")
    if center_lat is not None and center_lng is not None:
        conversation_lines.append(f"Area: lat {center_lat}, lng {center_lng}, radius {radius_m} m")
    for msg in sorted_messages:
        ts_label = _format_epoch(msg.get("lastModifiedTimestamp"))
        prefix_bits = [b for b in [ts_label, msg.get("messageType")] if b]
        prefix = " | ".join(prefix_bits)
        body = msg.get("body") or msg.get("title") or ""
        line = f"{prefix}: {body}" if prefix else body
        if line:
            conversation_lines.append(line)
    if not active:
        conversation_lines.append("Case closed.")
    conversation = "\n".join([line for line in conversation_lines if line])

    prepared_messages = [_prepare_burgernet_message(msg) for msg in sorted_messages]

    start_ts = _coerce_epoch_seconds(action.get("startTimestamp"))
    end_ts = _coerce_epoch_seconds(action.get("endTimestamp"))

    latest_message_text = None
    latest_message_type = None
    latest_message_time = None
    if latest:
        latest_message_text = latest.get("body") or latest.get("title")
        latest_message_type = latest.get("messageType")
        latest_message_time = _format_epoch(latest.get("lastModifiedTimestamp"))
        if status == "closed" and latest_message_text:
            latest_message_text = f"{latest_message_text} (case closed)"

    return {
        "id": action_id,
        "municipality": action.get("municipality"),
        "action_type": action.get("actionType"),
        "amber_alert": _coerce_bool(action.get("amberAlert")),
        "active": active,
        "start_ts": start_ts,
        "end_ts": end_ts,
        "start": _format_epoch(action.get("startTimestamp")),
        "end": _format_epoch(action.get("endTimestamp")),
        "latest_message": latest_message_text,
        "latest_message_type": latest_message_type,
        "latest_message_time": latest_message_time,
        "messages": prepared_messages,
        "conversation": conversation,
        "area": {
            "lat": center_lat,
            "lng": center_lng,
            "radius": radius_m,
            "distance_m": distance_m,
        },
    }


def _prepare_burgernet_actions(payload, lat0, lon0, max_radius_m):
    actions = []
    for action in _extract_burgernet_actions(payload):
        prepared = _prepare_burgernet_action(action, lat0, lon0, max_radius_m)
        if prepared:
            actions.append(prepared)
    actions.sort(key=lambda a: a.get("start_ts") or 0, reverse=True)
    return actions


def _normalize(source, payload, now=None):
    """Adapt verified feed shapes into source-scoped alert records."""
    now = now or datetime.now(timezone.utc)
    if source == 'burgernet':
        if not isinstance(payload, dict) or not isinstance(payload.get('actions'), list):
            raise ValueError('Expected Burgernet actions list')
        result = []
        for action in _prepare_burgernet_actions(payload, 52, 5, None):
            messages = [{'type': m['message_type'], 'body': m['body'] or m['title'] or '', 'time': m['last_modified'], 'url': m['response_url']} for m in action['messages']]
            result.append(dict(id=f"burgernet:{action['id']}", source='amber' if action['amber_alert'] else source, feed=source,
                title=next((m.get('title') for m in action['messages'] if m.get('title')), None) or ('Vermissing / oproep' if action['amber_alert'] else 'Burgernetoproep'),
                place=action['municipality'] or 'Onbekende locatie', active=action['active'],
                lat=action['area']['lat'], lon=action['area']['lng'], radius_m=action['area']['radius'], polygons=[],
                messages=messages, updated_at=action['latest_message_time'] or action['start'], start_at=action['start'], national=False))
        return result
    if source == 'nl_alert':
        if not isinstance(payload, dict) or not isinstance(payload.get('data'), list):
            raise ValueError('Expected NL-Alert data list')
        result = []
        for item in payload['data']:
            if not isinstance(item, dict) or not item.get('id'):
                continue
            polygons = [p for p in _iter_polygons(item.get('area')) if len(p) >= 3 and all(valid_point(*point) for point in p)]
            points = polygons[0] if polygons else []
            result.append(dict(id=f"nl_alert:{item['id']}", source=source, feed=source,
                title=(item.get('message') or 'NL-Alert').split(' *** ')[0][:95], place='NL-Alert uitzendgebied',
                active=_is_active(item, now), lat=sum(p[0] for p in points)/len(points) if points else None,
                lon=sum(p[1] for p in points)/len(points) if points else None, radius_m=0, polygons=polygons,
                messages=[{'type': 'Bericht', 'body': item.get('message') or '', 'time': item.get('start_at'), 'url': item.get('resource_uri')}],
                updated_at=item.get('start_at'), start_at=item.get('start_at'), national=False))
        return result
    if source != 'amber' or not isinstance(payload, list):
        raise ValueError('Expected AMBER alerts list')
    result = []
    for item in payload:
        if not isinstance(item, dict) or not item.get('AlertId'):
            continue
        area = item.get('Area') or {}
        lat = lon = None
        radius = 0
        circle = area.get('Circle')
        if isinstance(circle, str):
            try:
                pair, *r = circle.split()
                lat, lon = map(float, pair.split(','))
                radius = float(r[0] if r else area.get('CircleKM', 0)) * 1000
                if not valid_point(lat, lon):
                    lat = lon = None
            except (ValueError, TypeError):
                lat = lon = None
        national = str(item.get('Scope', '')).lower() in ('national', 'landelijk', 'nationwide') or 'landelijk' in str(area.get('Description', '')).lower()
        body = item.get('Description') or item.get('Message') or area.get('Description') or 'De bron geeft geen berichttekst mee.'
        result.append(dict(id=f"amber:{item['AlertId']}", source=source, feed=source,
            title='AMBER Alert' if _coerce_float(item.get('AlertLevel'), 0) >= 5 else 'Vermist kind',
            place=area.get('Description') or 'Locatie niet beschikbaar', active=item.get('State') == 'Actual' and item.get('Type') in ('Alert', 'Update'),
            lat=lat, lon=lon, radius_m=max(0, radius), polygons=[], national=national,
            messages=[{'type': item.get('Type') or 'Bericht', 'body': str(body), 'time': item.get('Sent') or item.get('SentAt'), 'url': None}],
            updated_at=item.get('Sent') or item.get('SentAt'), start_at=item.get('Sent') or item.get('SentAt')))
    return result


def valid_point(lat, lon):
    return isinstance(lat, (int, float)) and isinstance(lon, (int, float)) and math.isfinite(lat) and math.isfinite(lon) and -90 <= lat <= 90 and -180 <= lon <= 180


def matches(zone, alert, location):
    if not zone.get('enabled', True) or alert['source'] not in zone['sources']:
        return False
    if alert.get('national'):
        return zone.get('include_national', True)
    center = location if zone['follow_location'] else zone
    lat, lon, radius = center['lat'], center['lon'], zone['radius_km'] * 1000
    if not valid_point(lat, lon):
        return False
    if alert.get('polygons'):
        return any(_point_in_polygon(lat, lon, p) or _min_distance_to_polygon_m(lat, lon, p) <= radius for p in alert['polygons'])
    return valid_point(alert.get('lat'), alert.get('lon')) and haversine(lat, lon, alert['lat'], alert['lon']) <= radius + alert.get('radius_m', 0)


def evaluate(zones, alerts, location, seen):
    """Emit once for entry/update/explicit closure; baseline a newly saved area."""
    import hashlib
    import json
    result, events = {}, []
    for zone in zones:
        previous = seen.get(zone['id'])
        current = {}
        for alert in alerts:
            if alert.get('stale'):
                if previous and alert['id'] in previous:
                    current[alert['id']] = previous[alert['id']]
                continue
            old = (previous or {}).get(alert['id'])
            in_area = matches(zone, alert, location)
            if not in_area and not (old and old['active'] and not alert['active']):
                continue
            digest = hashlib.sha256(json.dumps(alert['messages'], sort_keys=True).encode()).hexdigest()
            current[alert['id']] = {'digest': digest, 'active': alert['active']}
            kind = None
            if previous is not None and zone.get('enabled', True):
                if alert['active'] and not old:
                    kind = 'enter'
                elif old and old['active'] and not alert['active']:
                    kind = 'closed'
                elif alert['active'] and old and digest != old['digest']:
                    kind = 'update'
            if kind:
                events.append({'zone_id': zone['id'], 'zone_name': zone['name'], 'kind': kind, 'alert_id': alert['id'], 'source': alert['source'], 'title': alert['title'], 'message': alert['messages'][-1]['body'] if alert['messages'] else ''})
        result[zone['id']] = current
    return result, events



def normalize(source, payload, now=None):
    records = _normalize(source, payload, now)
    for record in records:
        record["category"] = record["source"]
        record["message"] = record["messages"][-1]["body"] if record["messages"] else ""
    return records
