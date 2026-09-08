// Avoid markercluster's zoomToShowLayer: it retains callbacks referencing
// removed marker parents. Live updates and filters can remove those parents.
export function revealMarker(map, group, marker) {
  if (!map || !group || !marker || !group.hasLayer(marker)) return;
  map.stop();
  let parent = group.getVisibleParent(marker);
  if (parent === marker && map.getBounds().contains(marker.getLatLng())) return;
  if (parent && parent !== marker) {
    map.fitBounds(parent.getBounds(), {animate: false, maxZoom: map.getMaxZoom()});
  } else {
    map.setView(marker.getLatLng(), map.getZoom(), {animate: false});
  }
  if (!group.hasLayer(marker)) return;
  parent = group.getVisibleParent(marker);
  if (parent && parent !== marker) {
    map.setView(marker.getLatLng(), map.getMaxZoom(), {animate: false});
    if (!group.hasLayer(marker)) return;
    parent = group.getVisibleParent(marker);
    // Same-coordinate alerts still need to fan out at maximum zoom.
    if (parent && parent !== marker) parent.spiderfy();
  }
}
