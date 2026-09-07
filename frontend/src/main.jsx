import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import L from 'leaflet';
import 'leaflet.markercluster';
import { Radar, Map, Bell, Settings2, Search, Plus, Minus, LocateFixed, ArrowUpRight, X, ChevronRight, ShieldCheck, Radio, Clock3, CircleDot, Check, Pencil, Trash2, MapPin, Layers, Menu, Copy, ExternalLink } from 'lucide-react';
import leafletCss from 'leaflet/dist/leaflet.css?inline';
import clusterCss from 'leaflet.markercluster/dist/MarkerCluster.css?inline';
import css from './style.css?inline';
import { demo } from './demo';
import { subscribe, saveAreas } from './client';

const sources = {nl_alert: {name: 'NL-Alert', color: '#ea7553'}, burgernet: {name: 'Burgernet', color: '#548678'}, amber: {name: 'AMBER Alert', color: '#c59b43'}};
const fmt = t => t ? new Date(t).toLocaleString('nl-NL', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'}) : 'Tijd onbekend';
const distance = (a,b) => {const r=Math.PI/180, dlat=(a.lat-b.lat)*r, dlon=(a.lon-b.lon)*r; return 12742*Math.asin(Math.sqrt(Math.sin(dlat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dlon/2)**2));};
const point = a => Number.isFinite(a?.lat) && Number.isFinite(a?.lon);
const safeUrl = value => {try {const url=new URL(value); return ['http:','https:'].includes(url.protocol) ? url.href : null;} catch{return null;}};
function IconButton({label, children, ...props}) {return <button className="icon-button" title={label} aria-label={label} {...props}>{children}</button>;}
function Tag({source}) {return <span className="tag" style={{'--source':sources[source].color}}><i/>{sources[source].name}</span>;}

function MapView({alerts, zones, location, trackingLocation, selected, onSelect, locationSelected, onLocationSelect, mapRef, draft, onPoint}) {
  const element = useRef(); const layer = useRef(); const clusters = useRef(); const markers = useRef(new globalThis.Map());
  const clickRef = useRef(onPoint); clickRef.current = onPoint;
  const selectRef = useRef(onSelect); selectRef.current = onSelect;
  useEffect(() => {
    const map=L.map(element.current,{zoomControl:false, attributionControl:true, minZoom:6, maxZoom:18}).setView([52.15,5.3],7);
    mapRef.current=map;
    // Override ingress referrer defaults per tile, without sharing the ingress token/path.
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{referrerPolicy:'origin',attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',maxZoom:19}).addTo(map);
    layer.current=L.layerGroup().addTo(map);
    clusters.current=L.markerClusterGroup({
      maxClusterRadius: 58,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      spiderfyOnMaxZoom: true,
      spiderfyDistanceMultiplier: 1.5,
      spiderLegPolylineOptions: {weight:1.5,color:'#b9d5cd',opacity:.65},
      animate: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      iconCreateFunction: cluster => {
        const count=cluster.getChildCount();
        const size=count>=100?54:count>=10?48:42;
        const active=cluster.getAllChildMarkers().some(m=>m.options.alertSelected);
        return L.divIcon({
          className:`alert-cluster ${active?'has-selection':''}`,
          html:`<span role="img" aria-label="${count} meldingen. Klik om te vergroten." title="${count} meldingen — klik om te vergroten">${count}</span>`,
          iconSize:[size,size], iconAnchor:[size/2,size/2],
        });
      },
    }).addTo(map);
    map.on('click', e => clickRef.current?.(e.latlng));
    const resize=new ResizeObserver(()=>map.invalidateSize()); resize.observe(element.current);
    return ()=>{resize.disconnect();map.remove();mapRef.current=null;clusters.current=null;markers.current.clear();};
  },[]);
  // Keep the cluster group stable while editing zones or opening details.
  useEffect(()=>{
    const group=clusters.current;if(!group)return;
    group.clearLayers();markers.current.clear();
    for(const a of alerts){
      if(!point(a))continue;
      const marker=L.marker([a.lat,a.lon],{icon:alertIcon(a,false),keyboard:true,title:`${sources[a.source].name}: ${a.title}`});
      marker.on('click',()=>selectRef.current(a.id));
      markers.current.set(a.id,marker);
    }
    group.addLayers([...markers.current.values()]);
  },[alerts]);
  useEffect(()=>{
    for(const a of alerts){
      const marker=markers.current.get(a.id);if(!marker)continue;
      marker.options.alertSelected=a.id===selected;
      marker.setIcon(alertIcon(a,a.id===selected));
    }
    clusters.current?.refreshClusters();
    const marker=markers.current.get(selected);
    // Also reveal list selections that are inside a cluster or share coordinates.
    if(marker)clusters.current?.zoomToShowLayer(marker);
  },[alerts,selected]);
  useEffect(()=>{
    const group=layer.current; if(!group)return; group.clearLayers();
    const drawZone=(z,editing=false)=>{const p=z.follow_location?trackingLocation:z;if(!point(p))return;L.circle([p.lat,p.lon],{radius:z.radius_km*1000,color:editing?'#344e45':'#7c978a',weight:1.5,dashArray:'5 7',fillColor:'#afc8ac',fillOpacity:editing?.18:.09,interactive:false}).addTo(group);};
    zones.filter(z=>z.enabled&&z.id!==draft?.id).forEach(z=>drawZone(z)); if(draft)drawZone(draft,true);
    alerts.forEach(a=>{
      const color=sources[a.source].color;
      if(a.id===selected) {
        if(a.polygons?.length) L.polygon(a.polygons,{color,weight:2,fillOpacity:.16}).addTo(group);
        else if(point(a))L.circle([a.lat,a.lon],{radius:a.radius_m||1000,color,weight:1,fillOpacity:.16}).addTo(group);
      }
    });
    if(point(location))L.marker([location.lat,location.lon],{icon:L.divIcon({className:`location-dot ${locationSelected?'tracking-selected':''}`,html:'<span class="sonar-ring"></span><span class="sonar-ring delayed"></span><i></i>',iconSize:[22,22]}),title:location.label}).on('click',onLocationSelect).addTo(group);
  },[alerts,zones,location,trackingLocation,selected,draft,locationSelected,onLocationSelect]);
  return <div className={'map-canvas '+(draft&&!draft.follow_location?'placing':'')} ref={element} aria-label="Interactieve kaart van Nederland"/>;
}

function alertIcon(alert, selected) {
  return L.divIcon({className:'alert-pin-wrap',html:`<span class="alert-pin ${selected?'selected':''} ${alert.active?'':'closed'}" style="--pin:${sources[alert.source].color}"><i class="sonar-ring"></i><i class="sonar-ring delayed"></i><span>${alert.source==='nl_alert'?'!':alert.source==='amber'?'A':'B'}</span></span>`,iconSize:[34,40],iconAnchor:[17,38]});
}

function App({host}) {
  const isDemo=host.hasAttribute('demo');
  const [data,setData]=useState(isDemo?demo:null);
  const [error,setError]=useState(''); const [connected,setConnected]=useState(isDemo);
  const [view,setView]=useState('map'); const [status,setStatus]=useState('active');
  const [filter,setFilter]=useState(Object.keys(sources)); const [search,setSearch]=useState('');
  const [locationSelected,setLocationSelected]=useState(false);
  const [selected,setSelected]=useState(null); const [draft,setDraft]=useState(null);
  const [saving,setSaving]=useState(false); const [notice,setNotice]=useState('');
  const [browserLocation,setBrowserLocation]=useState(null); const [mobileList,setMobileList]=useState(false);
  const mapRef=useRef(); const dialogRef=useRef();
  useEffect(()=>{
    if(isDemo)return;
    return subscribe(d=>{setData(d);setError('');},setConnected,setError);
  },[isDemo]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),4500);return()=>clearTimeout(timer);},[notice]);
  useEffect(()=>{
    if(!draft)return;
    const previous=host.shadowRoot.activeElement;
    dialogRef.current?.querySelector('input')?.focus();
    const key=e=>{
      if(e.key==='Escape')setDraft(null);
      if(e.key==='Tab'){
        const nodes=[...dialogRef.current.querySelectorAll('button:not(:disabled),input,select,textarea,a[href]')];
        const first=nodes[0],last=nodes.at(-1),active=host.shadowRoot.activeElement;
        if(e.shiftKey&&active===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&active===last){e.preventDefault();first.focus();}
      }
    };
    host.shadowRoot.addEventListener('keydown',key);return()=>{host.shadowRoot.removeEventListener('keydown',key);previous?.focus();};
  },[!!draft]);
  const location=browserLocation||data?.location;
  const alerts=useMemo(()=>(data?.alerts||[]).filter(a=>filter.includes(a.source)&&(status==='all'||(status==='active'?a.active:!a.active))&&`${a.title} ${a.place} ${a.messages.map(m=>m.body).join(' ')}`.toLowerCase().includes(search.toLowerCase())),[data,filter,status,search]);
  const current=data?.alerts.find(a=>a.id===selected);
  const admin=true; // Access is authenticated by Home Assistant ingress (admin panel).
  const select=id=>{setLocationSelected(false);setSelected(id);setView('map');setMobileList(false);};
  const selectLocation=React.useCallback(()=>{setLocationSelected(true);setSelected(null);},[]);
  const saveZones=async zones=>{
    setSaving(true);setError('');
    try {if(isDemo)setData(d=>({...d,zones}));else setData(await saveAreas(zones));setDraft(null);setNotice(isDemo?'Gebied aangepast in deze demosessie':'Alertgebieden opgeslagen');}
    catch{setError('Opslaan is mislukt. Controleer je verbinding en beheerdersrechten.');}
    finally{setSaving(false);}
  };
  const newZone=()=>{const located=point(data.location);const center=mapRef.current.getCenter();setSelected(null);setDraft({id:crypto.randomUUID(),name:'Nieuw alertgebied',lat:located?data.location.lat:center.lat,lon:located?data.location.lon:center.lng,radius_km:10,follow_location:located,enabled:true,include_national:true,sources:Object.keys(sources)});};
  const locate=()=>{
    if(!navigator.geolocation){setError('Deze browser ondersteunt geen locatiebepaling.');return;}
    navigator.geolocation.getCurrentPosition(p=>{const l={lat:p.coords.latitude,lon:p.coords.longitude,label:'Browserlocatie'};setBrowserLocation(l);mapRef.current?.flyTo([l.lat,l.lon],11);setNotice('Browserlocatie zichtbaar. Automatiseringen volgen de Home Assistant-locatie.');},()=>setError('Locatie niet beschikbaar. Geef locatietoegang via een beveiligde verbinding.'),{timeout:12000});
  };
  const zoneYaml=z=>`alias: NL Alert — ${z.name}\ntriggers:\n  - trigger: event\n    event_type: nl_alert_radius\n    event_data:\n      instance_id: ${data?.instance_id||'demo'}\n      zone_id: ${z.id}\n      kind: enter\nactions:\n  - action: persistent_notification.create\n    data:\n      title: "{{ trigger.event.data.title }}"\n      message: "{{ trigger.event.data.message }}"\nmode: queued\nmax: 50`;
  return <div className="app">
    <aside className="rail"><a className="brand-symbol" href="#" aria-label="NL Alert overzicht" onClick={e=>{e.preventDefault();setView('map');}}><Radar size={27}/></a><div className="rail-nav"><IconButton label="Kaart" className={'rail-button '+(view==='map'?'active':'')} onClick={()=>{setView('map');setDraft(null);}}><Map size={22}/></IconButton><IconButton label="Alertgebieden" className={'rail-button '+(view==='zones'?'active':'')} onClick={()=>{setView('zones');setSelected(null);}}><Bell size={22}/></IconButton><IconButton label="Bronnen en instellingen" className={'rail-button '+(view==='settings'?'active':'')} onClick={()=>{setView('settings');setSelected(null);}}><Settings2 size={22}/></IconButton></div><span className="rail-bottom"><ShieldCheck size={20}/><small>NL</small></span></aside>
    <main><header><div className="identity"><b>NL<span>Alert</span><i/></b><span className="header-divider"/><span className="header-title">Een helder beeld van je omgeving.</span></div><div className="header-right"><span className={'live '+(!connected?'offline':'')}><i/>{isDemo?'Demonstratie':connected?'Verbonden':'Verbinding verbroken'}</span><span className="avatar">N</span></div></header>
    <section className="workspace">
      <MapView alerts={alerts} zones={data?.zones||[]} location={location} trackingLocation={data?.location} selected={view==='map'&&!draft?selected:null} onSelect={select} locationSelected={locationSelected&&view==='map'&&!draft} onLocationSelect={selectLocation} mapRef={mapRef} draft={draft} onPoint={p=>draft&&!draft.follow_location&&setDraft({...draft,lat:p.lat,lon:p.lng})}/>
      <div className="map-shade"/>
      <div className="map-heading"><span className="eyebrow">DICHTBIJ. OP DE HOOGTE.</span><h1>Wat speelt er<br/>in Nederland<span>?</span></h1><p>Drie bronnen. Eén overzicht.</p></div>
      {isDemo&&<div className="demo-notice">Demomodus · fictieve meldingen</div>}
      <button className="mobile-list-toggle glass" onClick={()=>setMobileList(!mobileList)}><Layers size={16}/> {mobileList?'Toon kaart':`${alerts.length} meldingen bekijken`}</button>
      <section className={'feed glass '+(mobileList?'mobile-open':'')} aria-label="Meldingen">
        <div className="feed-heading"><div><span className="eyebrow">HET OVERZICHT</span><h2>Meldingen <span>{alerts.length}</span></h2></div><Radio size={21}/></div>
        <label className="search"><Search size={17}/><input placeholder="Zoek een plaats of melding…" aria-label="Zoek een plaats of melding" value={search} onChange={e=>setSearch(e.target.value)}/><kbd>⌕</kbd></label>
        <div className="source-filters">{Object.entries(sources).map(([s,v])=><button key={s} aria-pressed={filter.includes(s)} onClick={()=>setFilter(filter.includes(s)?filter.filter(f=>f!==s):[...filter,s])} className={filter.includes(s)?'chosen':''} style={{'--source':v.color}}><i/>{v.name}</button>)}</div>
        <div className="tabs">{[['active','Actief'],['closed','Afgerond'],['all','Alles']].map(([key,label])=><button key={key} className={status===key?'active':''} onClick={()=>setStatus(key)}>{label}</button>)}</div>
        <div className="alert-list">{!data?<div className="empty">{error||'Meldingen ophalen…'}</div>:alerts.length===0?<div className="empty"><ShieldCheck size={30}/><h3>Even helemaal rustig</h3><p>Geen meldingen binnen deze filters.</p></div>:alerts.map(a=><button className={'alert-card '+(selected===a.id?'selected':'')} key={a.id} onClick={()=>select(a.id)}><div className="alert-meta"><Tag source={a.source}/><span>{a.stale?'Niet actueel':a.active?'Actief':'Afgerond'}</span></div><h3>{a.title}</h3><p>{a.messages.at(-1)?.body}</p><div className="alert-foot"><span><MapPin size={12}/>{a.place}</span><ChevronRight size={15}/></div><small>{fmt(a.updated_at)}{point(a)&&point(location)?` · ${distance(a,location).toFixed(1)} km`:''}</small></button>)}</div>
        <div className="feed-footer"><i/>{isDemo?'Voorbeeldgegevens':`${Object.values(data?.sources||{}).filter(s=>s.ok).length}/3 bronnen bereikbaar`}<span>Elke 2 min. bijgewerkt</span></div>
      </section>
      {view==='map'&&!current&&!draft&&<div className="area-summary glass"><div className="summary-icon"><Radar size={22}/></div><div><b>Jouw omgeving, in beeld</b><p>{data?.zones.filter(z=>z.enabled).length||0} actieve alertgebieden</p></div><button aria-label="Beheer alertgebieden" onClick={()=>setView('zones')}><ArrowUpRight size={21}/></button></div>}
      {current&&view==='map'&&!draft&&<section key={current.id} className={`detail glass ${current.active&&!current.stale&&connected?'detail-live':''}`} style={{'--detail-accent':sources[current.source].color}} aria-label="Meldingdetails"><div className="detail-top"><Tag source={current.source}/><IconButton label="Sluit melding" onClick={()=>setSelected(null)}><X size={19}/></IconButton></div><span className="eyebrow detail-status"><i aria-hidden="true"/>{current.stale?'LAATST BEKENDE MELDING':current.active?'ACTIEVE MELDING':'AFGEROND'}</span><h2>{current.title}</h2><p className="detail-location"><MapPin size={15}/>{current.place}</p>{!point(current)&&<p className="hint">{current.national?'Landelijke melding':'De bron geeft geen kaartlocatie mee.'}</p>}<div className="timeline-heading"><Clock3 size={16}/><b>Verloop van de melding</b><span>{current.messages.length}</span></div><div className="timeline">{current.messages.map((m,i)=><article key={i}><i/><div><span className="message-type">{m.type||'Bericht'}</span><time>{fmt(m.time)}</time><p>{m.body}</p>{safeUrl(m.url)&&<a href={safeUrl(m.url)} target="_blank" rel="noreferrer">Bekijk bij de bron <ExternalLink size={13}/></a>}</div></article>)}</div><div className="detail-bottom"><ShieldCheck size={16}/> Berichten zoals aangeleverd door de bron</div></section>}
      {view==='zones'&&!draft&&<section className="drawer glass"><div className="detail-top"><span className="eyebrow">OP JOUW VOORWAARDEN</span><IconButton label="Sluiten" onClick={()=>setView('map')}><X size={19}/></IconButton></div><h2>Jouw alertgebieden</h2><p className="muted">Kies waar je op de hoogte wilt blijven.</p><button className="primary" disabled={!admin||!data} onClick={newZone}><Plus size={18}/> Nieuw alertgebied</button><div className="zone-list">{data?.zones.length===0&&<p className="empty">Maak je eerste gebied aan op de kaart.</p>}{data?.zones.map(z=><article className="zone-card" key={z.id}><div className="zone-title"><div className="summary-icon"><Radar size={21}/></div><div><h3>{z.name}</h3><small>{z.radius_km} km · {z.follow_location?'Volgt Home Assistant':'Vast middelpunt'}</small></div><button className={'switch '+(z.enabled?'on':'')} role="switch" aria-checked={z.enabled} aria-label={`${z.name} inschakelen`} disabled={!admin||saving} onClick={()=>saveZones(data.zones.map(a=>a.id===z.id?{...a,enabled:!a.enabled}:a))}/></div><div className="zone-actions"><span>{z.sources.length} bronnen</span><IconButton label={`Bewerk ${z.name}`} disabled={!admin} onClick={()=>setDraft({...z})}><Pencil size={15}/></IconButton></div></article>)}</div><div className="automation-note"><CircleDot size={20}/><div><b>Klaar voor automatiseringen</b><p>Een nieuwe melding, update of afloop in je gebied kan een actie in Home Assistant starten.</p></div></div>{!admin&&<p className="hint">Alleen beheerders kunnen gebieden aanpassen.</p>}</section>}
      {view==='settings'&&!draft&&<section className="drawer glass"><div className="detail-top"><span className="eyebrow">ALLES VERBONDEN</span><IconButton label="Sluiten" onClick={()=>setView('map')}><X size={19}/></IconButton></div><h2>Bronnen & locatie</h2><p className="muted">Een transparant overzicht van je verbindingen.</p>{Object.entries(sources).map(([s,v])=><div className="source-status" key={s}><Tag source={s}/><b>{isDemo?'Demo':data?.sources[s]?.ok?'Bereikbaar':'Niet bereikbaar'}</b><small>Laatst gelukt: {fmt(data?.sources[s]?.updated_at)}</small></div>)}<h3>Locatie op de kaart</h3><p className="muted">{location?.label||'Nog niet beschikbaar'}</p><button className="secondary" onClick={locate}><LocateFixed size={16}/> Gebruik browserlocatie</button>{browserLocation&&<button className="secondary" onClick={()=>setBrowserLocation(null)}>Terug naar Home Assistant-locatie</button>}<p className="hint">Gebieden die je volgen gebruiken de thuislocatie of device tracker uit de appconfiguratie. Browserlocatie geldt alleen voor deze kaart.</p><p className="hint">Stel een person- of device_tracker-entiteit in via de configuratie van de NL Alert-app. Zonder entiteit gebruikt de app je Home Assistant-thuislocatie.</p><div className="source-status"><b>Home Assistant-sensoren</b><span>{isDemo?'Demo':data?.bridge?.ok?'Verbonden':'Niet verbonden'}</span><small>{isDemo?'De demo publiceert geen sensoren.':data?.bridge?.message}</small></div><p className="hint">De kaart haalt kaarttegels op bij OpenStreetMap. Meldingen komen via de NL Alert-app.</p></section>}
      {draft&&<section className="drawer editor glass" role="dialog" aria-label="Alertgebied bewerken" ref={dialogRef}><div className="detail-top"><span className="eyebrow">JOUW GEBIED</span><IconButton label="Annuleren" onClick={()=>setDraft(null)}><X size={19}/></IconButton></div><h2>Een oogje in de buurt.</h2><label className="field">Naam<input maxLength={60} value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/></label><label className="check-row"><input type="checkbox" checked={draft.follow_location} onChange={e=>setDraft({...draft,follow_location:e.target.checked})}/> Volg mijn Home Assistant-locatie</label>{!draft.follow_location&&<><p className="hint">Klik op de kaart om het middelpunt te plaatsen.</p><div className="coordinates">{['lat','lon'].map((key,i)=><label className="field" key={key}>{i?'Lengtegraad':'Breedtegraad'}<input type="number" min={i?-180:-90} max={i?180:90} step="0.0001" value={draft[key]} onChange={e=>setDraft({...draft,[key]:Number(e.target.value)})}/></label>)}</div></>}<div className="radius-label"><label htmlFor="radius">Straal van het gebied</label><b>{draft.radius_km} <span>km</span></b></div><input id="radius" className="range" type="range" min="0.5" max="100" step="0.5" value={draft.radius_km} onChange={e=>setDraft({...draft,radius_km:Number(e.target.value)})}/><div className="range-ends"><span>0,5 km</span><span>100 km</span></div><label className="field">Bronnen</label><div className="editor-sources">{Object.entries(sources).map(([s,v])=><label className="check-row" key={s}><input type="checkbox" checked={draft.sources.includes(s)} onChange={e=>setDraft({...draft,sources:e.target.checked?[...draft.sources,s]:draft.sources.filter(x=>x!==s)})}/><Tag source={s}/></label>)}</div><label className="check-row"><input type="checkbox" checked={draft.include_national} onChange={e=>setDraft({...draft,include_national:e.target.checked})}/> Ook expliciet landelijke meldingen</label><details><summary>Gebruik in een automatisering</summary><p className="hint">Sla het gebied eerst op. Gebruik enter, update of closed als gebeurtenis.</p><pre>{zoneYaml(draft)}</pre><button className="secondary" onClick={async()=>{try{await navigator.clipboard.writeText(zoneYaml(draft));setNotice('YAML gekopieerd');}catch{setNotice('Kopiëren niet toegestaan. Selecteer de YAML handmatig.');}}}><Copy size={15}/> Kopieer YAML</button></details><div className="editor-actions"><button className="primary" disabled={saving||!admin||!draft.name.trim()||!draft.sources.length||!point(draft)} onClick={()=>saveZones([...data.zones.filter(z=>z.id!==draft.id),draft])}><Check size={17}/>{saving?'Opslaan…':'Gebied opslaan'}</button>{data.zones.some(z=>z.id===draft.id)&&<IconButton label="Verwijder gebied" disabled={saving||!admin} onClick={()=>saveZones(data.zones.filter(z=>z.id!==draft.id))}><Trash2 size={18}/></IconButton>}</div></section>}
      <div className="map-tools glass"><IconButton label="Inzoomen" onClick={()=>mapRef.current?.zoomIn()}><Plus size={19}/></IconButton><IconButton label="Uitzoomen" onClick={()=>mapRef.current?.zoomOut()}><Minus size={19}/></IconButton><hr/><IconButton label="Naar mijn locatie" aria-pressed={locationSelected} onClick={()=>{if(point(location)){selectLocation();setView('map');mapRef.current?.flyTo([location.lat,location.lon],11);}}}><LocateFixed size={19}/></IconButton><IconButton label="Heel Nederland" onClick={()=>mapRef.current?.flyTo([52.15,5.3],7)}><Map size={18}/></IconButton></div>
      <div className="map-caption"><span className="location-key"/> {location?.label||'Locatie laden'}<span>·</span><span className="radius-key"/> Alertgebied</div>
      {(error||notice)&&<div className={'toast glass '+(error?'error':'')} role={error?'alert':'status'}>{error||notice}<IconButton label="Melding sluiten" onClick={()=>{setError('');setNotice('');}}><X size={16}/></IconButton></div>}
    </section></main>
  </div>;
}

class NLAlertPanel extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});const style=document.createElement('style');style.textContent=leafletCss+'\n'+clusterCss+'\n'+css;this.shadowRoot.append(style);this.mount=document.createElement('div');this.shadowRoot.append(this.mount);}
  connectedCallback(){this.root=createRoot(this.mount);this.render();}
  disconnectedCallback(){this.root?.unmount();this.root=null;}
  render(){this.root?.render(<App host={this}/>);}
}
if(!customElements.get('nl-alert-panel'))customElements.define('nl-alert-panel',NLAlertPanel);
