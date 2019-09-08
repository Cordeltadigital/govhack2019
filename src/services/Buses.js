// var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
// var request = require('request');

export async function getBuses(state) {
  // let routes = localStorage.getItem('routes')
  // if(routes){
  //   return new Promise(resolve => resolve(JSON.parse(routes)))
  // }
  return fetch("https://govhack.cordelta.digital/api/routes.php?state="+state, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
  
}

export async function getRouteDetails(id) {
  // return details
}

// function getStopRoute(stopID){

//   // Tripgo API key = b605ccfdb8e9bf3460e1a88b81d46384
// }

function getBusesNearStop(){
  var directionsService = new window.google.maps.DirectionsService();
  var selectedMode = 'TRANSIT';
  directionsService.route({
    origin: {lat: 37.77, lng: -122.447},  // Haight.
    destination: {lat: 37.77, lng: -122.447},  // Ocean Beach.
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: window.google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status === 'OK') {
      console.log(response)
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
getBusesNearStop();