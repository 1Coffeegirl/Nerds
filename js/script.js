function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 59.939090, lng: 30.319629},
		zoom: 17
});
	var iconBase = 'img/marker.png';
	var marker = new google.maps.Marker({
  	position: {lat: 59.938607, lng: 30.323335},
  	map: map,
  	icon: iconBase
});
}

var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

link.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.add("show");
});
close.addEventListener("click", function(event) {
	popup.classList.remove("show");
});