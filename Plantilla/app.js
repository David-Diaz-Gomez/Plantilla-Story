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
    esriConfig.apiKey = "AAPK70593acd587d4c8c90ea672129db5386KUUOo0zmbNlIIa8LXOQR1bB4x9fbhyAZxlj49pvQTbwlH8xMRDtduOCn0QYOlAex"; // Reemplaza con tu API Key
  
    // Resto del código es similar al ejemplo anterior
    // Crear un mapa, vista del mapa y añadir widgets al mapa
    var map = new Map({
      basemap: "topo-vector"
    });
  
    var view = new MapView({
      container: "map",
      map: map,
      center: [-74.0817, 4.6097], 
      zoom: 10
    });

    var searchWidget = new Search({
        view: view,
        container: "searchWidget",
        position: "bottom-right",
        includeDefaultSources: false // Puedes configurar las fuentes de búsqueda aquí
      });

    
  
    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid"
    });
  
    var fullscreen = new Fullscreen({
        view: view,
        element: document.querySelector(".map")
      });

    var locateWidget = new Locate({
      view: view
    });
  
    var scaleBar = new ScaleBar({
      view: view
    });

    var homeWidget = new Home({
        view: view
      });
      
    var legendWidget = new Legend({
          view: view,
        container: "legendWidget",
        style: "classic" // Puedes cambiar el estilo de la leyenda si lo prefieres
      });

      var featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Perimetro_urbano/FeatureServer"
        // Otros ajustes opcionales, como definir símbolos, filtros, etc.
      });

    view.ui.add(homeWidget, "top-left");
    view.ui.add(basemapToggle, "top-right");
    view.ui.add(locateWidget, "top-left");
    view.ui.add(scaleBar, "bottom-left");
    view.ui.add(fullscreen, "top-right");
    view.ui.add(searchWidget, "bottom-right");
    view.ui.add(legendWidget, "bottom-left");
    map.add(featureLayer);
  });
  