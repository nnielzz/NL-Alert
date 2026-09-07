// Relative URLs work both directly and under Supervisor's ingress prefix.
export function subscribe(onData, onConnected, onError) {
  let socket, timer, stopped = false;
  const connect = () => {
    const url = new URL('api/ws', document.baseURI);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    socket = new WebSocket(url);
    socket.onmessage = event => {
      try {onData(JSON.parse(event.data));onConnected(true);}
      catch {onError('Ongeldig antwoord van de app.');}
    };
    socket.onclose = () => {onConnected(false);if(!stopped)timer=setTimeout(connect,3000);};
    socket.onerror = () => onError('Verbinding met de app onderbroken. Er wordt opnieuw verbonden.');
  };
  connect();
  return () => {stopped=true;clearTimeout(timer);socket?.close();};
}

export async function saveAreas(zones) {
  const response = await fetch(new URL('api/zones', document.baseURI), {
    method:'POST', headers:{'Content-Type':'application/json','X-NL-Alert-Request':'dashboard'},
    body:JSON.stringify({zones}),
  });
  if(!response.ok)throw new Error('Opslaan mislukt');
  return response.json();
}
