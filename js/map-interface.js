var apiKey = require("./../.env").apiKey;


var map;
function initMap() {
  var myLatLng = {lat: 37.0902, lng: -95.7129};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0902, lng: -95.7129},
    zoom: 5
  });

map.addListener('click', function(event) {
  marker = new google.maps.Marker({position: event.latLng, map: map});
  markerLat = marker.position.lat();
  markerLon = marker.position.lng();
  getConcerts(markerLat, markerLon);
});
}
function getConcerts(thisLat, thisLon){
  $.get('http://api.bandsintown.com/events/search?location=' + thisLat + ',' + thisLon + '&radius=10&format=json&app_id=EpicodusStudentProject', function(info){
    $("#bandName").append('<p>'+info[0].artists[0].name + '</p>');
    console.log(info[0].artists[0].name);
    console.log(info);
  });
}


$(document).ready(function(){
   $.get('https://maps.googleapis.com/maps/api/js?key='+ apiKey + '&callback=initMap',
   function(newMap){
     $("#map").show(initMap());
   });

});
