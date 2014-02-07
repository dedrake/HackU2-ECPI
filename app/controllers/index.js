var coordinates = {latitude: null, longitude: null};
var loc = Titanium.Geolocation.getCurrentPosition(function(e) {
	coordinates.latitude = e.coords.latitude;
	coordinates.longitude = e.coords.longitude;
}); 

function startClick(event){
	Alloy.createController('jobsIndex', coordinates).getView().open();
}

$.home.open();
