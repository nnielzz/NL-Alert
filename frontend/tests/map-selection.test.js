import test from 'node:test';
import assert from 'node:assert/strict';
import {revealMarker} from '../src/map-selection.js';
function fixture(){
 const calls=[];
 const marker={getLatLng:()=>({lat:52, lng:5})};
 const cluster={getBounds:()=>({}),spiderfy:()=>calls.push('spiderfy')};
 let member=true,parent=cluster;
 const group={hasLayer:m=>m===marker&&member,getVisibleParent:()=>parent};
 const map={stop:()=>{},getBounds:()=>({contains:()=>false}),getMaxZoom:()=>18,getZoom:()=>7,
  fitBounds:()=>calls.push('fit'),setView:()=>calls.push('view')};
 return {map,group,marker,calls,setMember:v=>member=v,setParent:v=>parent=v};
}
test('ignores missing or already removed markers',()=>{
 const f=fixture();f.setMember(false);
 revealMarker(f.map,f.group,f.marker);revealMarker(f.map,f.group,undefined);
 assert.deepEqual(f.calls,[]);
});
test('coincident alerts fan out without registering delayed callbacks',()=>{
 const f=fixture();revealMarker(f.map,f.group,f.marker);
 assert.deepEqual(f.calls,['fit','view','spiderfy']);
});
test('removal during map movement cannot dereference an old parent',()=>{
 const f=fixture();f.map.fitBounds=()=>{f.setMember(false);f.setParent(undefined);};
 assert.doesNotThrow(()=>revealMarker(f.map,f.group,f.marker));
 assert.deepEqual(f.calls,[]);
});
test('an absent visible parent after movement is safe',()=>{
 const f=fixture();f.map.fitBounds=()=>f.setParent(undefined);
 assert.doesNotThrow(()=>revealMarker(f.map,f.group,f.marker));
 assert.deepEqual(f.calls,[]);
});
test('an already visible selected marker does not move the map',()=>{
 const f=fixture();f.setParent(f.marker);f.map.getBounds=()=>({contains:()=>true});
 revealMarker(f.map,f.group,f.marker);assert.deepEqual(f.calls,[]);
});
