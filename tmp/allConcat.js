var apiKey = require("./../.env").apiKey;

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$(document).ready(function(){

   $.get('https://maps.googleapis.com/maps/api/js?key='+ apiKey + '&callback=initMap',
   function(newMap){
     $('#map').text(new google.maps.Map(document.getElementById('map'), {
       center: {lat: -34.397, lng: 150.644},
       zoom: 8
     }));
   });

});
