var map;
var selected_code="";

function init() {

    map = new OpenLayers.Map({
        div: "map",
        allOverlays: true
    });

//    var osm = new OpenLayers.Layer.OSM();
//    var gmap = new OpenLayers.Layer.Google("Google Streets", {visibility: false});
	var gphy = new OpenLayers.Layer.Google("Google Physical",{type: google.maps.MapTypeId.TERRAIN});


	// allow testing of specific renderers via "?renderer=Canvas", etc
	var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
	renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
			
    var vectors1 = new OpenLayers.Layer.Vector("Vector Layer 1", {
        renderers: renderer,
        styleMap: new OpenLayers.StyleMap({
            "default": new OpenLayers.Style(OpenLayers.Util.applyDefaults({
                	externalGraphic: "${icon_unsel}",
                	graphicOpacity: 1,
                	rotation: -0,
                	pointRadius: 10,
				    // label with \n linebreaks
                    // label : "${code}\n\n${name}",                    
				    label : "${code}\n\n",                    
                    fontColor: "${favColor}",
                    fontSize: "10px",
                    fontFamily: "Courier New, monospace",
                    // fontWeight: "bold",
                    labelAlign: "${align}",
                    labelXOffset: "${xOffset}",
                    labelYOffset: "${yOffset}",
                    labelOutlineColor: "white",
                    labelOutlineWidth: 2				
				
            }, OpenLayers.Feature.Vector.style["default"])),
            "select": new OpenLayers.Style({
                externalGraphic: "${icon_sel}",
				fontColor: "${selColor}"
            })
        })
	});
	vectors1.id = "vectors1";

	// note that first layer must be visible
    map.addLayers([gphy,  vectors1]);

    //map.addControl(new OpenLayers.Control.LayerSwitcher());
	map.addControl(new OpenLayers.Control.MousePosition());
    //map.zoomToMaxExtent();

	var mercator = new OpenLayers.Projection("EPSG:900913");
	var geographic = new OpenLayers.Projection("EPSG:4326");
	//map.setCenter(new OpenLayers.LonLat(90.0, 60.0).transform(geographic, mercator), 8);
	
	//var extent = new OpenLayers.Bounds(8, 44.5, 19, 50);
	var extent = new OpenLayers.Bounds(
	
	new OpenLayers.LonLat(-10.0, 50.0).transform(geographic, mercator).lon,
	new OpenLayers.LonLat(-10.0, 50.0).transform(geographic, mercator).lat,
	new OpenLayers.LonLat(170.0, 70.0).transform(geographic, mercator).lon,
	new OpenLayers.LonLat(170.0, 70.0).transform(geographic, mercator).lat);
	
	map.zoomToExtent(extent);

	// generating vector features
	var extent = map.getExtent();

	var lons = [-64.25, 58.57, 90.03, 38.23, -179.37, 104.46, 48.79, 30.30, 39.52, 134.69, 23.74, 150.73, 37.30, 83.24, 30.88, 158.25, 29.72, 129.66];
	var lats = [-65.25, 56.43, 61.58, 58.07, 68.88, 52.17, 55.91, 50.72, 60.86, 47.61, 49.90, 60.05, 55.48, 54.85, 46.78, 52.97, 60.54, 61.96];
	var codes = ['AIA', 'ARS', 'POD', 'BOX', 'CPS', 'IRT', 'KZN', 'KIV', 'KLI', 'KHB', 'LVV', 'MGD', 'MOS', 'NVS', 'ODE', 'PET', 'SPG', 'YAK'];
	var names = ['Argentine Islands, Akademik Vernadsky base', 'Arti', 'Bor', 'Borok', 'Cape Schmidt', 'Irkutsk', 'Kazan', 'Kiev', 'Klimovskaya', 'Khabarovsk', 'Lviv', 'Magadan', 'Moskva', 'Novosibirsk', 'Odessa', 'Paratunka', 'St. Petersburg', 'Yakutsk'];
	var imag = [true, true, false, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true];

	var icon1 = "";
	var icon2 = "";
	var features = [];

	for(var i=0; i<codes.length; ++i) {
            // create a point feature
            var pointFeature = new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(new OpenLayers.LonLat(lons[i], lats[i]).transform(geographic, mercator).lon,
											  new OpenLayers.LonLat(lons[i], lats[i]).transform(geographic, mercator).lat
				));
            
			if (imag[i]) {
				 icon1 = "js/OpenLayers212/img/marker-green.png";
				 icon2 = "js/OpenLayers212/img/marker-blue.png";
			}
			else {
				 icon1 = "img/marker-tri-yellow-small.png";
				 icon2 = "img/marker-tri-blue-small.png";
			}
			
			
			pointFeature.attributes = {
                code: codes[i],
                name: names[i],
                favColor: 'black',
				selColor: 'blue',
                align: "cm",
				yOffset: 2,
				icon_unsel: icon1,
				icon_sel:   icon2
            };
			pointFeature.id = codes[i];		
			features.push(pointFeature);
	}			
/*
	for(var i=0; i<10; ++i) {
            // create a point feature
            var pointFeature = new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(extent.left + (extent.right - extent.left) * Math.random(),
				extent.bottom + (extent.top - extent.bottom) * Math.random()
				));
            pointFeature.attributes = {
                code: "BOX",
                name: "Borok",
                favColor: 'black',
				selColor: 'blue',
                align: "cm"
            };
			features.push(pointFeature);
	}
*/	
	vectors1.addFeatures(features);
	
	
	selectControl = new OpenLayers.Control.SelectFeature(
                [vectors1],
                {
                    clickout: true, toggle: false,
                    multiple: false, hover: false,
                    //toggleKey: "ctrlKey", // ctrl key removes from selection
                    //multipleKey: "shiftKey" // shift key adds to selection
                }
            );
    map.addControl(selectControl);
	selectControl.activate();	

    vectors1.events.on({
    	"featureselected": function(e) {
			selected_code = e.feature.attributes.code;			
			if (document.getElementById('sel_obs') == null){
				showStatus("<strong>Selected observatory/station:</strong> <a href=\"obs-"+selected_code+".html\">"+selected_code+" ("+e.feature.attributes.name+")</a>. Click the link to obtain detailed information.");
			}
			else {
				document.getElementById('sel_obs').value = selected_code;
			}
        },
        "featureunselected": function(e) {
			selected_code = "";
			if (document.getElementById('sel_obs') == null){
				showStatus("<strong>Please select observatory/station.</strong>"); 
			}
			else {
				document.getElementById('sel_obs').value = selected_code;
			}
			
        }
    });
	
	function showStatus(text) {
    	document.getElementById("status").innerHTML = text;            
    }

}
