/*Preferiblemente solo modificar los apartados que digan "modificar" */

//LOGICA DEL WIDGET SWIPE

// Importar módulos y librerías de la API de Esri ArcGIS
require([
  "esri/config",
  "esri/views/MapView",
  "esri/WebMap",
  "esri/widgets/Swipe"
], function(esriConfig, MapView, WebMap, Swipe) {
  // Configuración de la API Key para autenticación
    // Reemplaza con tu API Key obtenida en tu cuenta developer
  esriConfig.apiKey = "AAPK70593acd587d4c8c90ea672129db5386KUUOo0zmbNlIIa8LXOQR1bB4x9fbhyAZxlj49pvQTbwlH8xMRDtduOCn0QYOlAex"; // Reemplaza con tu API Key

  // Cargar el primer WebMap como la capa "antes"
  var webmapBefore = new WebMap({
    portalItem: {
      id: "0d1e1ecbc57b4efba6165119f2696998" // ID del primer WebMap (cambiar id de webmap)
    }
  });

  // Cargar el segundo WebMap como la capa "después"
  var webmapAfter = new WebMap({
    portalItem: {
      id: "24da1e8a67534de58d5136a7f12d5443" // ID del segundo WebMap (cambiar id de webmap)
    }
  });

  // Crear la vista del mapa con el segundo WebMap
  var view = new MapView({
    container: "map1", // ID del contenedor HTML
    map: webmapAfter,
    center: [-74.0817, 4.6097], // Coordenadas de Bogotá
    zoom: 12 // Nivel de zoom deseado
  });

  // Esperar a que se cargue el segundo WebMap
  view.when(function() {
    // Añadir las capas del primer WebMap al segundo WebMap
    webmapAfter.addMany(webmapBefore.layers.items);

    // Añadir la funcionalidad Swipe al mapa
    var swipe = new Swipe({
      view: view,
      leadingLayers: [webmapAfter.layers.items[0]], // Capa principal del segundo WebMap
      trailingLayers: [webmapAfter.layers.items[1]], // Capa secundaria del segundo WebMap
      position: 50,
      direction: "horizontal"
    });

    // Añadir el Swipe Widget a la interfaz de usuario
    view.ui.add(swipe);
  });
});
