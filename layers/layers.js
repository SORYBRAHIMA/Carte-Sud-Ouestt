var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_ProvSudouest_1 = new ol.format.GeoJSON();
var features_ProvSudouest_1 = format_ProvSudouest_1.readFeatures(json_ProvSudouest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvSudouest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvSudouest_1.addFeatures(features_ProvSudouest_1);
var lyr_ProvSudouest_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvSudouest_1, 
                style: style_ProvSudouest_1,
                popuplayertitle: 'Prov-Sud-ouest',
                interactive: true,
    title: 'Prov-Sud-ouest<br />\
    <img src="styles/legend/ProvSudouest_1_0.png" /> BOUGOURIBA<br />\
    <img src="styles/legend/ProvSudouest_1_1.png" /> IOBA<br />\
    <img src="styles/legend/ProvSudouest_1_2.png" /> NOUMBIEL<br />\
    <img src="styles/legend/ProvSudouest_1_3.png" /> PONI<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_ProvSudouest_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_ProvSudouest_1];
lyr_ProvSudouest_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Secteur': 'Secteur', });
lyr_ProvSudouest_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_ProvSudouest_1.set('fieldLabels', {'Nom': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'inline label - always visible', 'Secteur': 'inline label - always visible', });
lyr_ProvSudouest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});