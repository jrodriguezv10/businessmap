var database;
var markersA = []; 
var mcA;

var bairro = ["BATEL", "", ""]; 
	var types = ["Bar/Choperia", "Cantina", "Churrascaria/Grill"]; 
	var ano = []; 

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "files/alvaras.csv",
        dataType: "text",
        success: function(data) {
			database = $.csv.toObjects(data);
			google.maps.event.addDomListener(window, 'load', initialize);
        }
     });
});


function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(-25.473341, -49.294076),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles : mapStylesGray
        }

        map = new google.maps.Map(mapCanvas, mapOptions)
        own();
}

function own() {
	var mcOptionsA = {gridSize: 50, maxZoom: 15, imagePath: 'img/businessTypeIcon'};
	mcA = new MarkerClusterer(map, markersA, mcOptionsA);

	for(var i = 1980; i <= 2015; i++){
		ano.push(i);
	}

	setMarkers(filterData(bairro, types, ano, false));
}

function filterData(bairro, tipo, ano, allSelected){

	var tmp = [];
	var tmp2 = database;

	//Get the alvaras that have the bairros selected
	for(var i = 0; i < tmp2.length; i++){
		for(var j = 0; j<bairro.length; j++){
			if(tmp2[i].bairro == bairro[j]){
				tmp.push(tmp2[i]);
				break;
			}
		}
	}

	tmp2 = tmp;
	tmp  = [];

	if(!allSelected){
		//Get the alvaras that have the tipos ('Tipo de negócio') selected
		for(var i = 0; i < tmp2.length; i++){
			for(var j = 0; j<tipo.length; j++){
				if(tmp2[i].tipo == tipo[j]){
					tmp.push(tmp2[i]);
					break;
				}
			}
		}

		tmp2 = tmp;
		tmp  = [];
	}

	//Get the alvaras that have the year ('ano') selected
	for(var i = 0; i < tmp2.length; i++){
		for(var j = 0; j<ano.length; j++){
			if(tmp2[i].ano.substring(0,4) == ano[j]){
				tmp.push(tmp2[i]);
				break;
			}
		}
	}
	
	return tmp;
}


function setMarkers (dataFilter) {
	markersA = [];
	$.each(dataFilter, function(i, item) {
		var marker = getMarker(item);
		markersA.push(marker);
	});
	mcA.setBusinessTypes(types);
	mcA.clearMarkers();	
	mcA.addMarkers(markersA);
}

function getMarker (item) {
	var latLng = new google.maps.LatLng(item.lat, item.lng);
	var iconURL = "";
	switch(item.tipo) {
		case types[0]:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
			break;
		case types[1]:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
			break;
		case types[2]:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
			break;	
		default:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';	
			break;

	}
	
	var marker = new google.maps.Marker({position: latLng, icon: iconURL, "businessType" : item.tipo, "alvaraName": item.nome_empresarial});
	marker.addListener('click', function() {
   		
   		var contentString ='<strong>Nome empresarial:</strong> '+item.nome_empresarial+
   		'<br><strong> Data de inicio de atividades: </strong> '+item.ano+
   		'<br><div class="street-map-link" onclick="viewStreetMap('+item.lat+','+item.lng+')">Ver em Street View... </div>';

   		var infowindow = new google.maps.InfoWindow({content: contentString});
       	 infowindow.open(map, marker);

    });

    return marker;
}













