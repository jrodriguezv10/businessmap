/*****************************************************
* database will get de array with the alvaras info
*****************************************************/
var database;

/*****************************************************
* Var to show the Street Map 
*****************************************************/
var panorama;

/*****************************************************
* Markers to be send to the algorithm
*****************************************************/
var markers = [];
/*****************************************************
* We set three Cluster, one per 'Tipo de negocio'
* selected in the front end
*****************************************************/
var mcBusiness;

/*****************************************************
* For Legend, count the number of Markers for each 
* thread of clusters
*****************************************************/
var totalMarkersA = 0;
var totalMarkersB = 0;
var totalMarkersC = 0;

/*****************************************************
* allTypes will receive all the 'Tipo de negocio' to display 
* in the front end, for the future the info has to be 
* get from database
*****************************************************/
var allTypes = ["Bar/Choperia",
				"Cachorro Quente",
				"Café",
				"Cantina",
				"Centro educativo",
				"Churrascaria/Grill",
				"Fastfood",
				"Franquia",
				"Gourmet",
				"Hotel",
				"Jogo",
				"Lanchonete",
				"Mercado/Mercearia",
				"Padaria/Confeitaria",
				"Pastelaria",
				"Pizzaria",
				"Restaurante",
				"Típico",
				"Outros"];

/*****************************************************
* types will get the list of 'Tipo de negócio'
* selected from the front end;
* Max 3 items selected
*****************************************************/
var types = ["","",""];

/*****************************************************
* bairro will get the list of bairros to show in the map
* max 3 bairros for coords reasons
*****************************************************/
var bairro = ["","",""];

/*****************************************************
* Google Map we use in the front end
*****************************************************/
var map;           

/*****************************************************
* Google Heat Map we use in the front end
*****************************************************/
var heatMap;
var heatmapLayer;

/*****************************************************
* Coords for draw bairros in the map
*****************************************************/
var batelCoords = [
	{lat: -25.434437, lng: -49.283550 },
	{lat: -25.435591, lng: -49.282694 },
	{lat: -25.438944, lng: -49.279068 },
	{lat: -25.441928, lng: -49.277662 },
	{lat: -25.448322, lng: -49.294796 },
	{lat: -25.447140, lng: -49.295461 },
	{lat: -25.447198, lng: -49.295611 },
	{lat: -25.446210, lng: -49.296159 },
	{lat: -25.445745, lng: -49.295493 },
	{lat: -25.444176, lng: -49.296180 },
	{lat: -25.443245, lng: -49.297146 },
	{lat: -25.442645, lng: -49.297497 }, 
	{lat: -25.441608, lng: -49.297929 },
	{lat: -25.440533, lng: -49.298884 }
    ];

var centroCoords = [
	{lat: -25.424780, lng: -49.259797},
	{lat: -25.427009, lng: -49.258853},
	{lat: -25.430526, lng: -49.257577},
	{lat: -25.433355, lng: -49.255731},
	{lat: -25.433694, lng: -49.256697},
	{lat: -25.433791, lng: -49.256632},
	{lat: -25.435157, lng: -49.260463},
	{lat: -25.435206, lng: -49.260430},
	{lat: -25.441387, lng: -49.276449},
	{lat: -25.441620, lng: -49.277221},
	{lat: -25.435836, lng: -49.262040},
	{lat: -25.435981, lng: -49.262276},
	{lat: -25.436136, lng: -49.262694},
	{lat: -25.441928, lng: -49.277662},
	{lat: -25.438944, lng: -49.279068},
	{lat: -25.435591, lng: -49.282694},
	{lat: -25.434437, lng: -49.283550},
	{lat: -25.429156, lng: -49.286026},
	{lat: -25.429767, lng: -49.282705},
	{lat: -25.430709, lng: -49.280849},
	{lat: -25.430048, lng: -49.279186},
	{lat: -25.428587, lng: -49.274294},
	{lat: -25.428607, lng: -49.274069},
	{lat: -25.428694, lng: -49.273843},
	{lat: -25.428752, lng: -49.273661},
	{lat: -25.428723, lng: -49.273468},
	{lat: -25.428296, lng: -49.272180},
	{lat: -25.427986, lng: -49.270947},
	{lat: -25.424392, lng: -49.270120},
	{lat: -25.424498, lng: -49.269402},
	{lat: -25.424362, lng: -49.268812},
	{lat: -25.422570, lng: -49.266644},
	{lat: -25.424140, lng: -49.262685},
	{lat: -25.425603, lng: -49.261945}
	];

var tatuquaraCoords = [
	{lat: -25.542572, lng: -49.294538 },
	{lat: -25.543463, lng: -49.294409 },
	{lat: -25.547451, lng: -49.293465 },
	{lat: -25.550781, lng: -49.292736 },
	{lat: -25.552562, lng: -49.292607 },
	{lat: -25.553104, lng: -49.292736 },
	{lat: -25.553801, lng: -49.293422 },
	{lat: -25.554498, lng: -49.293980 },
	{lat: -25.555079, lng: -49.293766 },
	{lat: -25.556395, lng: -49.292564 },
	{lat: -25.557982, lng: -49.291792 },
	{lat: -25.559454, lng: -49.291792 },
	{lat: -25.560886, lng: -49.291448 },
	{lat: -25.560693, lng: -49.293680 },
	{lat: -25.559647, lng: -49.295439 },
	{lat: -25.558486, lng: -49.297199 },
	{lat: -25.558060, lng: -49.297714 },
	{lat: -25.558176, lng: -49.298229 },
	{lat: -25.559221, lng: -49.299345 },
	{lat: -25.560422, lng: -49.300332 },
	{lat: -25.561389, lng: -49.301619 },
	{lat: -25.561699, lng: -49.301619 },
	{lat: -25.562125, lng: -49.301190 },
	{lat: -25.562590, lng: -49.301405 },
	{lat: -25.564216, lng: -49.302864 },
	{lat: -25.564022, lng: -49.302864 },
	{lat: -25.564912, lng: -49.303250 },
	{lat: -25.567506, lng: -49.306125 },
	{lat: -25.569829, lng: -49.306168 },
	{lat: -25.571261, lng: -49.306211 },
	{lat: -25.571339, lng: -49.308057 },
	{lat: -25.570216, lng: -49.309730 },
	{lat: -25.570100, lng: -49.310674 },
	{lat: -25.570564, lng: -49.310803 },
	{lat: -25.570603, lng: -49.310889 },
	{lat: -25.570758, lng: -49.311404 },
	{lat: -25.569481, lng: -49.315095 },
	{lat: -25.570797, lng: -49.316296 },
	{lat: -25.571339, lng: -49.316597 },
	{lat: -25.569790, lng: -49.317240 },
	{lat: -25.569248, lng: -49.317498 },
	{lat: -25.569713, lng: -49.318056 },
	{lat: -25.570371, lng: -49.317970 },
	{lat: -25.570681, lng: -49.318099 },
	{lat: -25.570874, lng: -49.318442 },
	{lat: -25.570719, lng: -49.318828 },
	{lat: -25.571145, lng: -49.318957 },
	{lat: -25.571300, lng: -49.319215 },
	{lat: -25.571261, lng: -49.319429 },
	{lat: -25.571455, lng: -49.319472 },
	{lat: -25.571455, lng: -49.319729 },
	{lat: -25.572190, lng: -49.319944 },
	{lat: -25.572190, lng: -49.321103 },
	{lat: -25.573119, lng: -49.322487 },
	{lat: -25.574242, lng: -49.324397 },
	{lat: -25.574532, lng: -49.324547 },
	{lat: -25.574861, lng: -49.324654 },
	{lat: -25.575500, lng: -49.324933 },
	{lat: -25.576023, lng: -49.325534 },
	{lat: -25.576410, lng: -49.325705 },
	{lat: -25.576855, lng: -49.326349 },
	{lat: -25.577610, lng: -49.326542 },
	{lat: -25.578287, lng: -49.327465 },
	{lat: -25.578423, lng: -49.327830 },
	{lat: -25.579100, lng: -49.328409 },
	{lat: -25.579507, lng: -49.329761 },
	{lat: -25.581036, lng: -49.331263 },
	{lat: -25.581694, lng: -49.332658 },
	{lat: -25.582313, lng: -49.332894 },
	{lat: -25.583358, lng: -49.334954 },
	{lat: -25.583165, lng: -49.335490 },
	{lat: -25.582719, lng: -49.335984 },
	{lat: -25.582448, lng: -49.336134 },
	{lat: -25.582119, lng: -49.336434 },
	{lat: -25.581848, lng: -49.337228 },
	{lat: -25.581636, lng: -49.337893 },
	{lat: -25.581636, lng: -49.338387 },
	{lat: -25.581519, lng: -49.339031 },
	{lat: -25.581519, lng: -49.340189 },
	{lat: -25.581578, lng: -49.340983 },
	{lat: -25.581461, lng: -49.341477 },
	{lat: -25.581384, lng: -49.342206 },
	{lat: -25.582023, lng: -49.344545 },
	{lat: -25.582178, lng: -49.344996 },
	{lat: -25.582119, lng: -49.345747 },
	{lat: -25.581945, lng: -49.345983 },
	{lat: -25.581732, lng: -49.346155 },
	{lat: -25.581384, lng: -49.346262 },
	{lat: -25.581016, lng: -49.346305 },
	{lat: -25.580726, lng: -49.345919 },
	{lat: -25.580300, lng: -49.345082 },
	{lat: -25.580184, lng: -49.344695 },
	{lat: -25.580261, lng: -49.344288 },
	{lat: -25.580474, lng: -49.344009 },
	{lat: -25.580590, lng: -49.343408 },
	{lat: -25.580358, lng: -49.342872 },
	{lat: -25.580068, lng: -49.342764 },
	{lat: -25.578945, lng: -49.342786 },
	{lat: -25.578616, lng: -49.342893 },
	{lat: -25.577823, lng: -49.343387 },
	{lat: -25.577532, lng: -49.343644 },
	{lat: -25.577126, lng: -49.343708 },
	{lat: -25.576294, lng: -49.343601 },
	{lat: -25.576332, lng: -49.343601 },
	{lat: -25.575326, lng: -49.343301 },
	{lat: -25.574745, lng: -49.342636 },
	{lat: -25.574261, lng: -49.342700 },
	{lat: -25.572423, lng: -49.343365 },
	{lat: -25.572132, lng: -49.343644 },
	{lat: -25.571165, lng: -49.344374 },
	{lat: -25.570313, lng: -49.344610 },
	{lat: -25.568900, lng: -49.345168 },
	{lat: -25.567913, lng: -49.345146 },
	{lat: -25.565977, lng: -49.345017 },
	{lat: -25.564738, lng: -49.344932 },
	{lat: -25.562299, lng: -49.344567 },
	{lat: -25.561467, lng: -49.344545 },
	{lat: -25.560964, lng: -49.344481 },
	{lat: -25.560518, lng: -49.344545 },
	{lat: -25.559512, lng: -49.344245 },
	{lat: -25.559086, lng: -49.344009 },
	{lat: -25.558931, lng: -49.343987 },
	{lat: -25.558176, lng: -49.343515 },
	{lat: -25.558176, lng: -49.343515 },
	{lat: -25.557924, lng: -49.343193 },
	{lat: -25.556802, lng: -49.342571 },
	{lat: -25.555388, lng: -49.342292 },
	{lat: -25.555253, lng: -49.341992 },
	{lat: -25.554788, lng: -49.342099 },
	{lat: -25.554343, lng: -49.342335 },
	{lat: -25.553220, lng: -49.342678 },
	{lat: -25.552949, lng: -49.342914 },
	{lat: -25.552465, lng: -49.343129 },
	{lat: -25.552349, lng: -49.343043 },
	{lat: -25.552465, lng: -49.341992 },
	{lat: -25.553085, lng: -49.337057 },
	{lat: -25.554149, lng: -49.332851 },
	{lat: -25.554769, lng: -49.330297 },
	{lat: -25.554730, lng: -49.327508 },
	{lat: -25.554633, lng: -49.326328 },
	{lat: -25.554556, lng: -49.323731 },
	{lat: -25.554556, lng: -49.322916 },
	{lat: -25.554614, lng: -49.322251 },
	{lat: -25.554963, lng: -49.320599 },
	{lat: -25.555234, lng: -49.319848 },
	{lat: -25.556027, lng: -49.318045 },
	{lat: -25.556956, lng: -49.316672 },
	{lat: -25.557731, lng: -49.315728 },
	{lat: -25.558524, lng: -49.314698 },
	{lat: -25.557731, lng: -49.315771 },
	{lat: -25.558563, lng: -49.314676 },
	{lat: -25.560170, lng: -49.312552 },
	{lat: -25.561080, lng: -49.310921 },
	{lat: -25.562028, lng: -49.308153 },
	{lat: -25.560286, lng: -49.307531 },
	{lat: -25.559434, lng: -49.306994 },
	{lat: -25.558505, lng: -49.306565 },
	{lat: -25.555969, lng: -49.305943 },
	{lat: -25.555214, lng: -49.305621 },
	{lat: -25.554537, lng: -49.305471 },
	{lat: -25.546019, lng: -49.303583 },
	{lat: -25.545128, lng: -49.303389 },
	{lat: -25.538100, lng: -49.301716 },
	{lat: -25.538255, lng: -49.301480 },
	{lat: -25.539204, lng: -49.300900 },
	{lat: -25.539610, lng: -49.300514 },
	{lat: -25.540946, lng: -49.299827 },
	{lat: -25.542185, lng: -49.299913 },
	{lat: -25.542553, lng: -49.299849 },
	{lat: -25.543463, lng: -49.299377 },
	{lat: -25.542514, lng: -49.294506 },
	{lat: -25.542243, lng: -49.294527 }
    ];

/*****************************************************
* Polygons with the Coords for each bairro
*****************************************************/
var batelPolygon = new google.maps.Polygon({
          paths: batelCoords,
          strokeColor: '#23ca04',
          strokeOpacity: 0.3,
          strokeWeight: 2,
          fillColor: '#23ca04',
          fillOpacity: 0.2
        });

var centroPolygon = new google.maps.Polygon({
          paths: centroCoords,
          strokeColor: '#368fda',
          strokeOpacity: 0.3,
          strokeWeight: 2,
          fillColor: '#368fda',
          fillOpacity: 0.2
        });

var tatuquaraPolygon = new google.maps.Polygon({
          paths: tatuquaraCoords,
          strokeColor: '#9900ff',
          strokeOpacity: 0.3,
          strokeWeight: 2,
          fillColor: '#9900ff',
          fillOpacity: 0.2
        });

/*****************************************************
* When the document is ready, 
* we get the array from the files/alvaras.csv 
*****************************************************/
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "files/alvaras.csv",
        dataType: "text",
        success: function(data) {
			database = $.csv.toObjects(data);
        }
     });
});

/*****************************************************
* Initialize the charts from Google Charts
*****************************************************/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/*****************************************************
* Necessary to create data for the chart
*****************************************************/
//var chartDataBuilder = [];

/*****************************************************
* Initialize the map, the clusters, the polygons,  
* the Slider for years range and the components
*****************************************************/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
        var heatMapCanvas = document.getElementById('heat-map');
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(-25.436909, -49.276780),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel:  false,
          styles : mapStylesGray
        }

        var heatMapOptions = {
          center: new google.maps.LatLng(-25.436909, -49.276780),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel:  false
        }

        map = new google.maps.Map(mapCanvas, mapOptions);
        heatMap = new google.maps.Map(heatMapCanvas, heatMapOptions);

        heatmapLayer = new google.maps.visualization.HeatmapLayer({
			map: heatMap
		});

        setStreetView();
        setMarkerClusterBidimensional();
        setPolygons();
        setComponents();
}

function setStreetView() {
	panorama = map.getStreetView();
    panorama.setPov(/** @type {google.maps.StreetViewPov} */({
    	heading: 265,
        pitch: 0
	}));
}

function setMarkerClusterBidimensional () {
	var mcOptionsBusiness = {gridSize: 50, maxZoom: 15, imagePath: 'img/businessTypeIcon'};
    mcBusiness = new MarkerClusterer(map, markers, mcOptionsBusiness);
}

function setPolygons () {

	batelPolygon.setMap(null);
    centroPolygon.setMap(null);
    tatuquaraPolygon.setMap(null);

	for(var i=0; i<3; i++){
		switch(bairro[i]){
			case "BATEL":
				batelPolygon.setMap(map);
				break;
			case "CENTRO":		
    			centroPolygon.setMap(map);
				break;
			case "TATUQUARA":
    			tatuquaraPolygon.setMap(map);
				break;
		}
	} 
}

function setComponents () {
	$( "#slider-range" ).slider({
 		range: true,
 		min: 1980,
 		max: 2015,
		values: [ 1980, 2015 ],
 		slide: function( event, ui ) {
 				$( "#years-range" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
 		    	}
 		});
 
 		$( "#years-range" ).val($( "#slider-range" ).slider( "values", 0 ) +
       			" - " + $( "#slider-range" ).slider( "values", 1 ) );

	//Create HTML to show in the front end for types
	var html="";
	for(var i=0; i<allTypes.length; i++){
			html+='<option value="'+allTypes[i]+'">'+allTypes[i]+'</option>';
	}
	$("#tipoSelector").append(html);

	$('#tipoSelector').multiselect({
	    columns: 1,
	    placeholder: 'Selecionar negócios',
	    search: true
	});

	$('#bairroSelector').multiselect({
	    columns: 1,
	    placeholder: 'Selecionar bairro',
	    search: true
	});
	
	$('#year-begin').val("1980");
	$('#year-end').val("2015");
}

function closeSettings(close) {console.log(close)
	var distance = (close ? "-" +($( "#setting-container" ).width()+20) : "0")+"px";
	$( "#setting-container" ).animate({left: distance}, 300);
	$("#open-settings").css("display", close ? "inline-block":"none");
	$("#close-settings").css("display", close ? "none":"inline-block");
}

function showNegocios () {
	var allSelected = $("#select-all").is(':checked');
	for(var i=1; i<=allTypes.length; i++){
		$('#ms-opt-'+i).prop('checked', allSelected);	
	}

	$('#tipo-container button').text(allSelected ? 'Todos seleccionados' : 'Selecionar negócios');
}

/*****************************************************
* This method obtains the options to filter the data:
* - The range of years (min 1984, max 2014).
* - The bairros selected.
* - The types ('Tipo de negócio')
******************************************************
* After obtain the data we execute filterData(bairro, tipo, ano)
* to get the filtered alvaras.
******************************************************
* With the filtered data, we create the lists of markers 
* for each 'Tipo de negócio' selected.
******************************************************
* Set the polygons for each bairro selected.
*****************************************************/
function executeFilter(){
	var begin =  parseInt($( "#slider-range" ).slider( "values", 0 ));
 	var end =  parseInt($( "#slider-range" ).slider( "values", 1 ));
	var limitTypes = 3;	
	var ano = [];

	var allSelected = $("#select-all").is(':checked');

	bairro = $('#bairroSelector').val();
	types = allSelected ? ["Todos os negócios","-","-"] : $('#tipoSelector').val(); 

	while(bairro.length<3){
		bairro.push("");
	}
	
	if(types.length>3){
		alert("must be less than 3");
		console.log("must be less than 3");
		types = [];
		return false;
	}

	while(types.length<3){
		types.push("");
	}

	var chartDataBuilder = [];
	chartDataBuilder.push(['Ano', types[0], types[1], types[2]]);

	for(var i = begin; i <= end; i++){
		ano.push(i);
		chartDataBuilder.push([i+"", 0, 0, 0]);
	}

	var dataFiltered = filterData(bairro, types, ano, allSelected);
	setMarkers(dataFiltered);
	drawChart(dataFiltered, chartDataBuilder);
	setPolygons();
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

/*****************************************************
* This method receives the data filtered by the options
* selected from the front end, depending on the tipo 
* ('Tipo de negócio') selected, each marker is added 
* to a respectic Marker array;
******************************************************/
function setMarkers (dataFiltered) {
	markers = [];
	var coordinates = [];	
	totalMarkersA = 0;
	totalMarkersB = 0;
	totalMarkersC = 0;

	$.each(dataFiltered, function(i, item) {
		markers.push(getMarker(item));
		coordinates.push(new google.maps.LatLng(item.lat, item.lng));
	});
	
	mcBusiness.clearMarkers();
	mcBusiness.setBranches(types);
	mcBusiness.addMarkers(markers);
	heatmapLayer.setData(coordinates);
	setLegend();
}

/*****************************************************
* Each Marker is creaed with the info of the alvara 
* received as a param
*****************************************************
* Count the number of markers for each businessType
* (threads of clusters)
*****************************************************/
function getMarker (item) {
	var latLng = new google.maps.LatLng(item.lat, item.lng);
	var iconURL = "";
	switch(item.tipo) {
		case types[0]:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
			totalMarkersA++;
			break;
		case types[1]:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
			totalMarkersB++;
			break;
		case types[2]:
			totalMarkersC++;
			break;	
		default:
			iconURL = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
			totalMarkersA++;	
			break;
	}
	
	var marker = new google.maps.Marker({position: latLng, icon: iconURL, 
									"branch" : item.tipo});
	marker.addListener('click', function() {
   		
   		var contentString ='<strong>Nome empresarial:</strong> '+item.nome_empresarial+
   		'<br><strong> Data de inicio de atividades: </strong> '+item.ano+
   		'<br><div class="street-map-link" onclick="viewStreetMap('+item.lat+','+item.lng+')">Ver em Street View... </div>';

   		var infowindow = new google.maps.InfoWindow({content: contentString});
       	 infowindow.open(map, marker);

    });

    return marker;
}
/*****************************************************
* The legend is made by the 'Tipo de negócio' selected.
*****************************************************/
function setLegend () {
	$("#txt-AA").text(types[0] + ( totalMarkersA>0 ? " ("+totalMarkersA+")":""));
	$("#txt-BB").text(types[1] + ( totalMarkersB>0 ? " ("+totalMarkersB+")":""));
	$("#txt-CC").text(types[2] + ( totalMarkersC>0 ? " ("+totalMarkersC+")":""));
}

/*****************************************************
* Open Street Map view
*****************************************************/
function viewStreetMap (lat1, lng1) {
	panorama.setPosition({lat: lat1, lng: lng1});
    panorama.setVisible(true);
}

/*****************************************************
* Chart to show the Year details for each query
*****************************************************/
function drawChart(dataFiltered, chartDataBuilder) {
		chartDataBuilder = chartDataBuilder == null ? [['Ano', types[0], types[1], types[2]], ['1980', 0, 0, 0]] : chartDataBuilder;
		dataFiltered = dataFiltered == null ? [] : dataFiltered;

        var data = google.visualization.arrayToDataTable(getDataForChart(dataFiltered, chartDataBuilder));
        var options = {
        	chartArea: {width: '85%'}, 
        	curveType: 'function', 
        	legend: { 
        		position: 'bottom'}, 
        	vAxis: {
        		format: '#'},
        		series: {
            0: { color: '#008cff' },
            1: { color: '#ffbb00' },
            2: { color: '#ff0000' },
          }
        	};


		var chart = new google.visualization.LineChart(document.getElementById('curve-chart'));
        chart.draw(data, options);
}

/*****************************************************
* Get data for the Chart from datafiltered
*****************************************************/
function getDataForChart(dataFiltered, chartDataBuilder){

	var minYear = parseInt(chartDataBuilder[1][0])-1;
	chartDataBuilder[0][1] += " (" + totalMarkersA + ")";
	chartDataBuilder[0][2] += " (" + totalMarkersB + ")";;
	chartDataBuilder[0][3] += " (" + totalMarkersC + ")";

	$.each(dataFiltered, function(i, item) {
		var index = parseInt(item.ano.substring(0,4)) - minYear;
		switch(item.tipo) {
			case types[0]:
				chartDataBuilder[index][1] +=1;
				break;
			case types[1]:
				chartDataBuilder[index][2] +=1;
				break;
			case types[2]:
				chartDataBuilder[index][3] +=1;
				break;	
		}
	});
	
	return chartDataBuilder;
}










