// var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
// var request = require('request');

export async function getBuses() {
  let routes = localStorage.getItem('routes')
  if(routes){
    return new Promise(resolve => resolve(JSON.parse(routes)))
  }
  return fetch("http://govhack.cordelta.digital/api/routes.php", {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
  .then(res => localStorage.setItem("routes", JSON.stringify(res)));
  
}

