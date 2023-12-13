require([
    'esri/Map',
    'esri/views/MapView',
    'esri/geometry/Point',
    'esri/layers/GraphicsLayer',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/PopupTemplate',
    'esri/Graphic'
  ], function(Map, MapView, Point, GraphicsLayer, SimpleMarkerSymbol, PopupTemplate, Graphic) {

    const map = new Map({
      basemap: 'topo'
    });

    const view = new MapView({
      container: 'viewDiv',
      map: map,
      center: [-74.006, 40.7128],
      zoom: 10
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const locations = [
      { name: 'Parque Nacional Natural Chingaza', description: 'Descripción Parque Nacional Natural Chingaza', review: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.', lat: 4.547716326358304, long: -73.73341122085519, imageUrl: 'https://images.unsplash.com/photo-1702323531205-a654a03a21b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#FF0000' },
      { name: 'Museo Nacional de Colombia', description: 'Descripción Museo Nacional de Colombia', review: 'No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', lat: 4.6171894519358645, long: -74.06842120370534, imageUrl: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#00FF00' },
      { name: 'Centro Comercial Andino', description: 'Descripción Centro Comercial Andino', review: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo', lat: 4.66766044792983, long: -74.05222982695011, imageUrl: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#0000FF' },
      { name: 'Parque de la 93', description: 'Descripción Parque de la 93', review: 'Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años', lat:4.67695714378619, long: -74.0482251618526, imageUrl: 'https://images.unsplash.com/photo-1701735173211-bc2375b0909d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#FFFF00' },
      { name: 'Estadio El Campín', description: 'Descripción Estadio El Campín', review: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock', lat: 4.645994211912207, long: -74.07736637719715, imageUrl: 'https://plus.unsplash.com/premium_photo-1701198465439-732664c53b1b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#00FFFF' },
      { name: 'Catedral Primada de Bogotá', description: 'Descripción Catedral Primada de Bogotá', review: 'Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32', lat: 4.598256698546516, long: -74.07537804836124, imageUrl: 'https://images.unsplash.com/photo-1682695798522-6e208131916d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#FF00FF' }
    ];

    for (let i = 0; i < locations.length; i++) {
        const label = document.getElementById(`l${i + 1}`);
        if (label) {
          label.textContent = locations[i].name;
        }
      }

    let currentIndex = 0;

    function showLocation(index) {
      const location = locations[index];
      const point = new Point({
        longitude: location.long,
        latitude: location.lat
      });

      const markerSymbol = new SimpleMarkerSymbol({
        color: location.color,
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      });

      const popupTemplate = new PopupTemplate({
        title: location.name,
        content: `${location.description}`
      });

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        popupTemplate: popupTemplate
      });

      graphicsLayer.removeAll();
      graphicsLayer.add(pointGraphic);

      view.goTo({ target: point, zoom: 15 });

      // Mostrar la información de la ubicación actual en el contenedor
      document.getElementById('locationImage').innerHTML = `<img src="${location.imageUrl}" style="max-width: 300px;"/>`;
      document.getElementById('locationTitle').textContent = `Título: ${location.name}`;
      document.getElementById('locationReview').textContent = `Reseña: ${location.review}`;
    }

    showLocation(currentIndex);

    document.getElementById('prevBtn').addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + locations.length) % locations.length;
      showLocation(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % locations.length;
      showLocation(currentIndex);
    });

  });