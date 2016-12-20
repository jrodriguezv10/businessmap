var database;
var total = 0;
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "files/alvaras.csv",
        dataType: "text",
        success: function(data) {
			database = $.csv.toObjects(data);
			$.each(database, function(i, item) {
				getBairroAddressComponents(item.lat, item.lng, item.bairro, item.idAlvara);
			});
        }
     });
});

function getBairroAddressComponents (lat, lng, bairro, idAlvara) {
	$.ajax({
         url:   'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyCdWA3FocJiL2gF0tifa3QmcqD6fcUs5pA',
         type:  'GET',
         dataType: "json",
         success:  function (response) {
        	 if(response.status == "OK"){
        	 	getRealBairroName(response.results);
				//getBairroName(response.results[0].address_components, bairro, idAlvara);
        	 }
        },
		error: function(response){
			console.log("damm");
		}	});
}

function getBairroName(address_components, bairro, idAlvara) {
	var local = "";
	$.each(address_components, function(i, item) {
		if(item.types.length>=3 && item.types[0] == 'political' && 
			item.types[1]=='sublocality' && 
			item.types[2]=='sublocality_level_1'){
			local = item.long_name.toUpperCase();
			//return false;
		}
     });

	if(bairro != local){
		total++;
		console.log("("+total+") "+idAlvara+": \t["+bairro+"] -> "+local);
	}
}

function getRealBairroName(response) {
	for(var i=0; i<response.length; i++){
		console.log(i);
	}
}