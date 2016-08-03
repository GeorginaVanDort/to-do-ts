var apiKey = require("./../.env").apiKey;

var markers = [];
var map;
function initMap() {
  var myLatLng = {lat: 37.0902, lng: -95.7129};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0902, lng: -95.7129},
    zoom: 5
  });

  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  function clearMarkers() {
    setMapOnAll(null);
  }

  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }

  map.addListener('click', function(event) {

    var marker = new google.maps.Marker({position: event.latLng, map: map});
    markers.push(marker);
    console.log(markers);
  });



}


$(document).ready(function(){
   $.get('https://maps.googleapis.com/maps/api/js?key='+ apiKey + '&callback=initMap',
   function(newMap){
     $("#map").show(initMap());
   });

});
