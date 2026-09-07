"""Validate dashboard settings independently of Home Assistant Core."""
import math
import re

SOURCES = {"burgernet", "amber", "nl_alert"}


def number(value, minimum, maximum):
    if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value) or not minimum <= value <= maximum:
        raise ValueError("Invalid coordinate or radius")
    return float(value)


def validate_zones(zones):
    if not isinstance(zones, list) or len(zones) > 30:
        raise ValueError("At most 30 areas are supported")
    result = []
    for zone in zones:
        if not isinstance(zone, dict) or not re.fullmatch(r"[A-Za-z0-9_-]{1,80}", str(zone.get("id", ""))) or zone['id'] == 'all':
            raise ValueError("Invalid area ID")
        name = zone.get('name')
        if not isinstance(name, str) or not 1 <= len(name.strip()) <= 60:
            raise ValueError("Area name is required")
        sources = zone.get('sources')
        if not isinstance(sources, list) or not sources or any(not isinstance(s, str) or s not in SOURCES for s in sources):
            raise ValueError("Choose valid sources")
        for key in ('enabled', 'follow_location', 'include_national'):
            if not isinstance(zone.get(key), bool):
                raise ValueError(f"Invalid {key}")
        result.append({"id": zone['id'], "name": name.strip(),
            "lat": number(zone.get('lat'), -90, 90), "lon": number(zone.get('lon'), -180, 180),
            "radius_km": number(zone.get('radius_km'), .1, 250),
            "sources": sorted(set(sources)), **{k: zone[k] for k in ('enabled', 'follow_location', 'include_national')}})
    if len({z['id'] for z in result}) != len(result):
        raise ValueError("Area IDs must be unique")
    return result
