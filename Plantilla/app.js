/*Preferiblemente solo modificar los apartados que digan "modificar" */

//LOGICA DEL WIDGET MAPA DE CAPAS

// Importar módulos y librerías de la API de Esri ArcGIS
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/Locate",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Fullscreen",
    "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/layers/FeatureLayer",
  ], function(esriConfig, Map, MapView, BasemapToggle, Locate, ScaleBar,Home,Fullscreen, Search, Legend,FeatureLayer) {
    // Configuración de la API Key para autenticación
    // Reemplaza con tu API Key obtenida en tu cuenta developer
    esriConfig.apiKey = "AAPK70593acd587d4c8c90ea672129db5386KUUOo0zmbNlIIa8LXOQR1bB4x9fbhyAZxlj49pvQTbwlH8xMRDtduOCn0QYOlAex"; // Reemplaza con tu API Key
  
     // Creación de un objeto Map y un objeto MapView
  var map = new Map({
    basemap: "topo-vector", // Tipo de basemap (modificar al gusto)
  });

  var view = new MapView({
    container: "map", // Contenedor HTML donde se mostrará el mapa
    map: map, //asociar al mapa creado anteriormente
    center: [-74.0817, 4.6097], // Centro del mapa inicial
    zoom: 10, // Nivel de zoom inicial
  });

  // Creación de widgets y configuración de sus propiedades
  var searchWidget = new Search({
    view: view, //agregar a la vista
    position: "bottom-right", //agregar abajo a la derecha
    includeDefaultSources: false, // Configuración de fuentes de búsqueda personalizadas
  });

  var basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "hybrid", // Basemap alternativo
  });

  var fullscreen = new Fullscreen({
    view: view,
    element: document.querySelector(".map"), // Elemento para pantalla completa
  });

  //widget de ubicacion
  var locateWidget = new Locate({
    view: view, //agregar a la vista
  });

  //widget de sacalebar
  var scaleBar = new ScaleBar({
    view: view, //agregar a la vista
  });

  //widget de home
  var homeWidget = new Home({
    view: view, //agregar a la vista
  });

  //widget de leyenda
  var legendWidget = new Legend({
    view: view,
    container: "legendWidget", // Contenedor para el widget de leyenda
    style: "classic", // Estilo de la leyenda
  });

  // Creación de una capa de entidades (FeatureLayer)
  var featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Perimetro_urbano/FeatureServer/0",
    outFields: ["*"],
    popupTemplate: {
        title: "Perimetro urbano",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "Año",
                        label: "Año"
                    },
                    {
                        fieldName: "Año2",
                        label: "Año2"
                    },
                    {
                        fieldName: "POLY_AREA",
                        label: "POLY_AREA"
                    }
                ]
            }
        ]
    },
    popupEnabled: true
});


  /** En caso de querer agregar otras capas:
   
  var featureLayer1 = new FeatureLayer({
    url:
      "OTRA_URL_LAYER",
  });
  map.add(featureLayer);

   */

  // Añadir widgets a la interfaz del mapa en posiciones específicas
  view.ui.add(homeWidget, "top-left");
  view.ui.add(basemapToggle, "top-right");
  view.ui.add(locateWidget, "top-left");
  view.ui.add(scaleBar, "bottom-left");
  view.ui.add(fullscreen, "top-right");
  view.ui.add(searchWidget, "bottom-right");
  view.ui.add(legendWidget, "bottom-left");

  // Agregar la capa de entidades al mapa
  map.add(featureLayer);
  
});