latLong = [45.526, -122.702];
var map = L.map('map').setView(latLong, 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'crookedtree.pk323kc7',
    accessToken: 'pk.eyJ1IjoiY3Jvb2tlZHRyZWUiLCJhIjoiY2ltM3Rnb3o2MDFmcnJya3M1a2NkbnA5MCJ9._Xhs2_0vR50i-756rzaO4w'
}).addTo(map);

// var marker = L.marker(latLong).addTo(map);
var marker = L.marker([45.55893, -122.64781]).addTo(map);

marker.bindPopup("I did something here!").openPopup();

var popup = L.popup();

//Opens an alert with latitude and longitude when the map is clickec
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

var getLatLng = map.on('click', function(e){
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});

//Drops a marker on the map where the user clicks
function onMapClick(e){
    marker
        .setLatLng(e.latlng)
        .bindPopup("hurr durr")
        .openPopup();
}

//Calls the onMapClick function
map.on('click', onMapClick);
