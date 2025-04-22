var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EEZ_1 = new ol.format.GeoJSON();
var features_EEZ_1 = format_EEZ_1.readFeatures(json_EEZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEZ_1.addFeatures(features_EEZ_1);
var lyr_EEZ_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EEZ_1, 
                style: style_EEZ_1,
                interactive: false,
                title: '<img src="styles/legend/EEZ_1.png" /> EEZ'
            });
var format_MarineHabitats_2 = new ol.format.GeoJSON();
var features_MarineHabitats_2 = format_MarineHabitats_2.readFeatures(json_MarineHabitats_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarineHabitats_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineHabitats_2.addFeatures(features_MarineHabitats_2);
var lyr_MarineHabitats_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarineHabitats_2, 
                style: style_MarineHabitats_2,
                interactive: false,
                title: '<img src="styles/legend/MarineHabitats_2.png" /> Marine Habitats'
            });
var format_MPAs_3 = new ol.format.GeoJSON();
var features_MPAs_3 = format_MPAs_3.readFeatures(json_MPAs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MPAs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPAs_3.addFeatures(features_MPAs_3);
var lyr_MPAs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MPAs_3, 
                style: style_MPAs_3,
                interactive: false,
                title: '<img src="styles/legend/MPAs_3.png" /> MPAs'
            });
var format_ArtificialReefs_4 = new ol.format.GeoJSON();
var features_ArtificialReefs_4 = format_ArtificialReefs_4.readFeatures(json_ArtificialReefs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtificialReefs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtificialReefs_4.addFeatures(features_ArtificialReefs_4);
var lyr_ArtificialReefs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArtificialReefs_4, 
                style: style_ArtificialReefs_4,
                interactive: false,
                title: '<img src="styles/legend/ArtificialReefs_4.png" /> Artificial Reefs'
            });
var format_ImportantWetlands_5 = new ol.format.GeoJSON();
var features_ImportantWetlands_5 = format_ImportantWetlands_5.readFeatures(json_ImportantWetlands_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImportantWetlands_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportantWetlands_5.addFeatures(features_ImportantWetlands_5);
var lyr_ImportantWetlands_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ImportantWetlands_5, 
                style: style_ImportantWetlands_5,
                interactive: false,
                title: '<img src="styles/legend/ImportantWetlands_5.png" /> Important Wetlands'
            });
var format_EspecialEnvironments_6 = new ol.format.GeoJSON();
var features_EspecialEnvironments_6 = format_EspecialEnvironments_6.readFeatures(json_EspecialEnvironments_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspecialEnvironments_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspecialEnvironments_6.addFeatures(features_EspecialEnvironments_6);
var lyr_EspecialEnvironments_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspecialEnvironments_6, 
                style: style_EspecialEnvironments_6,
                interactive: false,
                title: '<img src="styles/legend/EspecialEnvironments_6.png" /> Especial Environments'
            });
var format_MarineEcosystems_7 = new ol.format.GeoJSON();
var features_MarineEcosystems_7 = format_MarineEcosystems_7.readFeatures(json_MarineEcosystems_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarineEcosystems_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineEcosystems_7.addFeatures(features_MarineEcosystems_7);
var lyr_MarineEcosystems_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarineEcosystems_7, 
                style: style_MarineEcosystems_7,
                interactive: false,
                title: '<img src="styles/legend/MarineEcosystems_7.png" /> Marine Ecosystems'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EEZ_1.setVisible(true);lyr_MarineHabitats_2.setVisible(true);lyr_MPAs_3.setVisible(true);lyr_ArtificialReefs_4.setVisible(true);lyr_ImportantWetlands_5.setVisible(true);lyr_EspecialEnvironments_6.setVisible(true);lyr_MarineEcosystems_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EEZ_1,lyr_MarineHabitats_2,lyr_MPAs_3,lyr_ArtificialReefs_4,lyr_ImportantWetlands_5,lyr_EspecialEnvironments_6,lyr_MarineEcosystems_7];
lyr_EEZ_1.set('fieldAliases', {'MRGID': 'MRGID', 'GeoName': 'GeoName', 'MRGID_Ter1': 'MRGID_Ter1', 'Pol_type': 'Pol_type', 'MRGID_Sov1': 'MRGID_Sov1', 'Territory1': 'Territory1', 'ISO_Ter1': 'ISO_Ter1', 'Sovereign1': 'Sovereign1', 'MRGID_Ter2': 'MRGID_Ter2', 'MRGID_Sov2': 'MRGID_Sov2', 'Territory2': 'Territory2', 'ISO_Ter2': 'ISO_Ter2', 'Sovereign2': 'Sovereign2', 'MRGID_Ter3': 'MRGID_Ter3', 'MRGID_Sov3': 'MRGID_Sov3', 'Territory3': 'Territory3', 'ISO_Ter3': 'ISO_Ter3', 'Sovereign3': 'Sovereign3', 'x_1': 'x_1', 'y_1': 'y_1', 'MRGID_EEZ': 'MRGID_EEZ', 'Area_km2': 'Area_km2', });
lyr_MarineHabitats_2.set('fieldAliases', {'ambiente': 'ambiente', 'Meta': 'Meta', 'Just_Alvo': 'Just_Alvo', 'Fonte': 'Fonte', 'Sist_Cord': 'Sist_Cord', 'Ano': 'Ano', 'Just_Meta': 'Just_Meta', 'Obs': 'Obs', 'Ref_Metodo': 'Ref_Metodo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MPAs_3.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', });
lyr_ArtificialReefs_4.set('fieldAliases', {'id_up': 'id_up', 'area_nome': 'area_nome', 'area_ha': 'area_ha', 'Area_UP': 'Area_UP', 'Oportunida': 'Oportunida', 'Classe': 'Classe', 'PC': 'PC', 'PF_17': 'PF_17', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ImportantWetlands_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nome': 'nome', 'Shape_Leng': 'Shape_Leng', 'Oportunida': 'Oportunida', 'Classe': 'Classe', 'PC': 'PC', 'PF_21': 'PF_21', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_EspecialEnvironments_6.set('fieldAliases', {'Nome': 'Nome', 'Just_Alvo': 'Just_Alvo', 'Meta': 'Meta', 'Just_Meta': 'Just_Meta', 'Ref_Metodo': 'Ref_Metodo', 'Obs': 'Obs', 'Fonte': 'Fonte', 'Sist_Coord': 'Sist_Coord', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Ano': 'Ano', });
lyr_MarineEcosystems_7.set('fieldAliases', {'ambiente': 'ambiente', 'Meta': 'Meta', 'Just_Alvo': 'Just_Alvo', 'Fonte': 'Fonte', 'Sist_Cord': 'Sist_Cord', 'Ano': 'Ano', 'Just_Meta': 'Just_Meta', 'Obs': 'Obs', 'Ref_Metodo': 'Ref_Metodo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EEZ_1.set('fieldImages', {'MRGID': 'TextEdit', 'GeoName': 'TextEdit', 'MRGID_Ter1': 'TextEdit', 'Pol_type': 'TextEdit', 'MRGID_Sov1': 'TextEdit', 'Territory1': 'TextEdit', 'ISO_Ter1': 'TextEdit', 'Sovereign1': 'TextEdit', 'MRGID_Ter2': 'TextEdit', 'MRGID_Sov2': 'TextEdit', 'Territory2': 'TextEdit', 'ISO_Ter2': 'TextEdit', 'Sovereign2': 'TextEdit', 'MRGID_Ter3': 'TextEdit', 'MRGID_Sov3': 'TextEdit', 'Territory3': 'TextEdit', 'ISO_Ter3': 'TextEdit', 'Sovereign3': 'TextEdit', 'x_1': 'TextEdit', 'y_1': 'TextEdit', 'MRGID_EEZ': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_MarineHabitats_2.set('fieldImages', {'ambiente': 'TextEdit', 'Meta': 'TextEdit', 'Just_Alvo': 'TextEdit', 'Fonte': 'TextEdit', 'Sist_Cord': 'TextEdit', 'Ano': 'TextEdit', 'Just_Meta': 'TextEdit', 'Obs': 'TextEdit', 'Ref_Metodo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MPAs_3.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', });
lyr_ArtificialReefs_4.set('fieldImages', {'id_up': 'TextEdit', 'area_nome': 'TextEdit', 'area_ha': 'TextEdit', 'Area_UP': 'TextEdit', 'Oportunida': 'TextEdit', 'Classe': 'TextEdit', 'PC': 'TextEdit', 'PF_17': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ImportantWetlands_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'nome': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Oportunida': 'TextEdit', 'Classe': 'TextEdit', 'PC': 'TextEdit', 'PF_21': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EspecialEnvironments_6.set('fieldImages', {'Nome': 'TextEdit', 'Just_Alvo': 'TextEdit', 'Meta': 'TextEdit', 'Just_Meta': 'TextEdit', 'Ref_Metodo': 'TextEdit', 'Obs': 'TextEdit', 'Fonte': 'TextEdit', 'Sist_Coord': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Ano': 'TextEdit', });
lyr_MarineEcosystems_7.set('fieldImages', {'ambiente': 'TextEdit', 'Meta': 'TextEdit', 'Just_Alvo': 'TextEdit', 'Fonte': 'TextEdit', 'Sist_Cord': 'TextEdit', 'Ano': 'TextEdit', 'Just_Meta': 'TextEdit', 'Obs': 'TextEdit', 'Ref_Metodo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EEZ_1.set('fieldLabels', {'MRGID': 'no label', 'GeoName': 'no label', 'MRGID_Ter1': 'no label', 'Pol_type': 'no label', 'MRGID_Sov1': 'no label', 'Territory1': 'no label', 'ISO_Ter1': 'no label', 'Sovereign1': 'no label', 'MRGID_Ter2': 'no label', 'MRGID_Sov2': 'no label', 'Territory2': 'no label', 'ISO_Ter2': 'no label', 'Sovereign2': 'no label', 'MRGID_Ter3': 'no label', 'MRGID_Sov3': 'no label', 'Territory3': 'no label', 'ISO_Ter3': 'no label', 'Sovereign3': 'no label', 'x_1': 'no label', 'y_1': 'no label', 'MRGID_EEZ': 'no label', 'Area_km2': 'no label', });
lyr_MarineHabitats_2.set('fieldLabels', {'ambiente': 'no label', 'Meta': 'no label', 'Just_Alvo': 'no label', 'Fonte': 'no label', 'Sist_Cord': 'no label', 'Ano': 'no label', 'Just_Meta': 'no label', 'Obs': 'no label', 'Ref_Metodo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MPAs_3.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', });
lyr_ArtificialReefs_4.set('fieldLabels', {'id_up': 'no label', 'area_nome': 'no label', 'area_ha': 'no label', 'Area_UP': 'no label', 'Oportunida': 'no label', 'Classe': 'no label', 'PC': 'no label', 'PF_17': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ImportantWetlands_5.set('fieldLabels', {'OBJECTID': 'no label', 'nome': 'no label', 'Shape_Leng': 'no label', 'Oportunida': 'no label', 'Classe': 'no label', 'PC': 'no label', 'PF_21': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_EspecialEnvironments_6.set('fieldLabels', {'Nome': 'no label', 'Just_Alvo': 'no label', 'Meta': 'no label', 'Just_Meta': 'no label', 'Ref_Metodo': 'no label', 'Obs': 'no label', 'Fonte': 'no label', 'Sist_Coord': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Ano': 'no label', });
lyr_MarineEcosystems_7.set('fieldLabels', {'ambiente': 'no label', 'Meta': 'no label', 'Just_Alvo': 'no label', 'Fonte': 'no label', 'Sist_Cord': 'no label', 'Ano': 'no label', 'Just_Meta': 'no label', 'Obs': 'no label', 'Ref_Metodo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MarineEcosystems_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});