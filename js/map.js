// var map;
// function initMap() {
//   var myLatLng = {lat: 37.0902, lng: -95.7129};
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 37.0902, lng: -95.7129},
//     zoom: 5
//   });
// }
// initMap.Prototype.getConcerts = function(thisLat, thisLon){
//   $.get('http://api.bandsintown.com/events/search?location=' + thisLat + ',' + thisLon + '&radius=10&format=json&app_id=EpicodusStudentProject',
//
//  function(info){
//    if (info[0]) {
//      for(var i=0; i<info.length; i++)
//        $("#bandName").append('<p>'+info[i].artists[0].name +'</p>'),
//        $('#venue').append('<p>' + info[i].venue.name + '</p>'),
//        $('#date').append('<p>' + info[i].datetime + '</p>'),
//        $('#ticket_status').append('<p>' + info[i].ticket_status + '</p>'),
//        $('#ticket_link').append("<a href='" + info[i].ticket_url + "'>Buy Tickets</a>");
//        console.log(info);
//    } else {
//      $('#bandName').text('Sorry, no bands are playin in this area.');
//      }
//   });
// }
//
// exports.initMapModule = initMap;
