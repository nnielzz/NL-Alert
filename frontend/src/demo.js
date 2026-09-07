const now = Date.now();
const time = (minutes) => new Date(now - minutes * 60000).toISOString();
const alert = (id, source, title, place, lat, lon, active, body, minutes) => ({
  id, source, feed: source, title, place, lat, lon, active, radius_m: 2400, polygons: [], national: false,
  updated_at: time(minutes), start_at: time(minutes + 20),
  messages: [{type: 'Start', time: time(minutes + 20), body}, ...(active ? [] : [{type: 'Afloop', time: time(minutes), body: 'Deze fictieve actie is afgesloten. Bedankt voor het uitkijken.'}])],
});
export const demo = {
  entry_id: 'demo', location: {lat: 52.09, lon: 5.12, label: 'Voorbeeldlocatie Utrecht'},
  sources: Object.fromEntries(['nl_alert', 'burgernet', 'amber'].map(s => [s, {ok: true, updated_at: time(1)}])),
  zones: [{id: 'thuis', name: 'Rondom thuis', lat: 52.09, lon: 5.12, radius_km: 15, follow_location: true, enabled: true, include_national: true, sources: ['nl_alert','burgernet','amber']}],
  alerts: [
    alert('demo-1', 'burgernet', 'Vermist persoon', 'Utrecht', 52.105, 5.10, true, 'VOORBEELDBERICHT — In deze demo wordt gezocht naar een vermist persoon in de omgeving van Utrecht. Dit is geen echte melding.', 8),
    {...alert('demo-2', 'nl_alert', 'Brand met rookontwikkeling', 'Rotterdam', 51.92, 4.47, true, 'VOORBEELDBERICHT — Brand met rookontwikkeling. Sluit ramen en deuren en zet de ventilatie uit. Dit is geen echte melding.', 24), polygons: [[[51.89,4.43],[51.96,4.44],[51.965,4.52],[51.91,4.55]]]},
    alert('demo-3', 'burgernet', 'Getuigen gezocht', 'Amersfoort', 52.155, 5.39, true, 'VOORBEELDBERICHT — De politie zoekt getuigen van een incident. Dit is geen echte oproep.', 42),
    alert('demo-4', 'amber', 'Vermist kind', 'Eindhoven', 51.44, 5.48, true, 'VOORBEELDBERICHT — Fictieve AMBER-melding om de interface te bekijken. Dit is geen echte vermissing.', 65),
    alert('demo-5', 'burgernet', 'Persoon teruggevonden', 'Amsterdam', 52.37, 4.9, false, 'VOORBEELDBERICHT — Een fictief startbericht voor een inmiddels afgesloten actie.', 95),
  ],
};
