"""Run with python -m unittest discover -s tests -v."""
import copy
import unittest
from datetime import datetime, timezone
from nl_alert.backend.models import normalize, matches, evaluate, haversine, valid_point

NOW = datetime(2026, 9, 7, 12, tzinfo=timezone.utc)
LOCATION = {"lat": 52.09, "lon": 5.12}
ZONE = {"id": "home", "name": "Thuis", **LOCATION, "radius_km": 5, "enabled": True,
        "follow_location": True, "sources": ["burgernet", "amber", "nl_alert"], "include_national": True}


def action(identifier=1, active=True, lat=52.09, messages=None):
    return {"id": identifier, "active": active, "area": {"lat": lat, "lng": 5.12, "radius": 1000},
            "municipality": "Utrecht", "startTimestamp": 1788778800,
            "messages": messages if messages is not None else [{"body": "Startbericht", "messageType": "Start", "lastModifiedTimestamp": 1788778800}]}


def alerts(*items):
    return normalize("burgernet", {"actions": list(items)}, NOW)


class ModelTests(unittest.TestCase):
    def test_messages_sorted_and_simultaneous_actions_preserved(self):
        data = alerts(action(messages=[{"body": "Afloop", "messageType": "Afloop", "lastModifiedTimestamp": 2000}, {"body": "Start", "messageType": "Start", "lastModifiedTimestamp": 1000}]), action(2))
        self.assertEqual(len(data), 2)
        self.assertEqual([m['body'] for m in data[0]['messages']], ['Start', 'Afloop'])

    def test_circle_intersection_counts_when_center_outside_zone(self):
        a = alerts(action(lat=52.14))[0]
        self.assertGreater(haversine(52.09, 5.12, 52.14, 5.12), 5000)
        self.assertTrue(matches(ZONE, a, LOCATION))

    def test_polygon_containing_location(self):
        a = normalize('nl_alert', {'data': [{'id':'nl1','area':['52,5 52,5.3 52.2,5.3 52.2,5'], 'message':'Rook', 'start_at':'2026-09-07T11:00:00Z', 'stop_at':'2026-09-07T13:00:00Z'}]}, NOW)[0]
        self.assertTrue(a['active'])
        self.assertTrue(matches({**ZONE,'radius_km':.1}, a, LOCATION))

    def test_expiry_is_explicit_closure(self):
        a = normalize('nl_alert', {'data': [{'id':'nl1','message':'Rook','stop_at':'2026-09-07T12:00:00Z'}]}, NOW)[0]
        self.assertFalse(a['active'])

    def test_bad_source_shape_does_not_silently_clear_feed(self):
        for source, payload in [('burgernet',{}), ('nl_alert',[]), ('amber',{})]:
            with self.assertRaises(ValueError): normalize(source, payload)

    def test_invalid_point(self):
        self.assertFalse(valid_point(float('nan'), 5))
        self.assertFalse(valid_point(92, 5))

    def test_source_filter(self):
        self.assertFalse(matches({**ZONE,'sources':['nl_alert']}, alerts(action())[0], LOCATION))

    def test_fixed_zone_does_not_follow_location(self):
        self.assertTrue(matches({**ZONE,'follow_location':False}, alerts(action())[0], {'lat':53,'lon':6}))
        self.assertFalse(matches(ZONE, alerts(action())[0], {'lat':53,'lon':6}))

    def test_amber_without_coordinates_is_not_assumed_national(self):
        a = normalize('amber', [{'AlertId':'1','State':'Actual','Type':'Alert','AlertLevel':5}])[0]
        self.assertFalse(matches(ZONE, a, LOCATION))
        a['national'] = True
        self.assertTrue(matches(ZONE, a, LOCATION))
        self.assertFalse(matches({**ZONE,'include_national':False}, a, LOCATION))

    def test_amber_circle(self):
        a = normalize('amber', [{'AlertId':'1','State':'Actual','Type':'Update','Area':{'Circle':'52.09,5.12 2'}}])[0]
        self.assertEqual(a['radius_m'], 2000)
        self.assertTrue(matches(ZONE,a,LOCATION))

    def test_amber_flag_from_burgernet(self):
        a = action(); a['amberAlert'] = True
        self.assertEqual(alerts(a)[0]['source'], 'amber')

    def test_new_zone_baselines_existing_alerts(self):
        state, events = evaluate([ZONE], alerts(action()), LOCATION, {})
        self.assertEqual(events, [])
        self.assertIn('burgernet:1', state['home'])

    def test_multiple_enters_not_lost_when_sensor_already_on(self):
        state, _ = evaluate([ZONE], alerts(action()), LOCATION, {})
        state, events = evaluate([ZONE], alerts(action(), action(2), action(3)), LOCATION, state)
        self.assertEqual([e['alert_id'] for e in events], ['burgernet:2','burgernet:3'])
        self.assertEqual({e['kind'] for e in events}, {'enter'})
        _, events = evaluate([ZONE], alerts(action(), action(2), action(3)), LOCATION, state)
        self.assertEqual(events, [])

    def test_update_and_closure_once(self):
        state, _ = evaluate([ZONE], alerts(action()), LOCATION, {})
        updated = action(messages=[{'body':'Nieuw bericht','messageType':'Update','lastModifiedTimestamp':1788778900}])
        state, events = evaluate([ZONE], alerts(updated), LOCATION, state)
        self.assertEqual(events[0]['kind'],'update')
        updated['active'] = False
        state, events = evaluate([ZONE], alerts(updated), LOCATION, state)
        self.assertEqual(events[0]['kind'],'closed')
        _, events = evaluate([ZONE], alerts(updated), LOCATION, state)
        self.assertEqual(events, [])

    def test_source_failure_keeps_dedupe_without_false_closure(self):
        values = alerts(action())
        state, _ = evaluate([ZONE], values, LOCATION, {})
        values[0]['stale'] = True
        state2, events = evaluate([ZONE], values, LOCATION, state)
        self.assertEqual(state2,state)
        self.assertEqual(events,[])
        values[0]['stale'] = False
        _, events = evaluate([ZONE], values, LOCATION, state2)
        self.assertEqual(events,[])

    def test_disabled_area_never_emits(self):
        _, events = evaluate([{**ZONE,'enabled':False}], alerts(action()), LOCATION, {'home':{}})
        self.assertEqual(events, [])

    def test_restart_saved_state_does_not_repeat(self):
        state, _ = evaluate([ZONE], alerts(action()), LOCATION, {})
        _, events = evaluate([ZONE], alerts(action()), LOCATION, copy.deepcopy(state))
        self.assertEqual(events, [])


if __name__ == '__main__': unittest.main()
