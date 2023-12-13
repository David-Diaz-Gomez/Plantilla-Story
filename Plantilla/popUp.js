// Función para abrir el popup
document.getElementById('abrirPopup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup').classList.add('show');
  });
  
  // Función para cerrar el popup
  function cerrarPopup() {
    document.getElementById('popup').classList.remove('show');
  }
  
  // Manejar el envío del formulario
  document.getElementById('fontForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Obtener el valor del campo de texto
    const googleFontsLink = document.getElementById('googleFontsLink').value;
  
    // Verificar si el enlace es válido antes de aplicarlo
    if (isValidGoogleFontsLink(googleFontsLink)) {
      // Crear un nuevo enlace <link>
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = googleFontsLink;
  
      // Obtener el enlace actual de Google Fonts (si existe) y reemplazarlo
      const currentLink = document.querySelector('link[href^="https://fonts.googleapis.com"]');
      if (currentLink) {
        currentLink.parentNode.replaceChild(newLink, currentLink);
      } else {
        document.head.appendChild(newLink);
      }
  
      // Obtener el nombre de la fuente y el peso desde el enlace
      const { fontName, weight } = extractFontNameAndWeight(googleFontsLink);
  
      // Aplicar la fuente con el peso al cuerpo del documento
      applyFontWithWeight(fontName, weight);
  
      // Ocultar el popup después de aplicar los cambios
      document.getElementById('popup').classList.remove('show');
    } else {
      alert('Ingrese un enlace válido de Google Fonts');
    }
  });
  
  // Función para extraer el nombre y el peso de la fuente desde el enlace de Google Fonts
  // Función para extraer el nombre y el peso de la fuente desde el enlace de Google Fonts
 // Función para extraer el nombre y el peso de la fuente desde el enlace de Google Fonts
// Función para extraer el nombre y el peso de la fuente desde el enlace de Google Fonts
// Función para extraer el nombre y el peso de la fuente desde el enlace de Google Fonts
function extractFontNameAndWeight(link) {
    const familyStartIndex = link.indexOf('family=') + 'family='.length;
    const familyEndIndex = link.indexOf('&', familyStartIndex);
  
    const fontParams = link.substring(familyStartIndex, familyEndIndex !== -1 ? familyEndIndex : undefined);
  
    let fontName = '';
    let weight = '';
  
    const params = fontParams.split(':');
    if (params.length > 1) {
      fontName = params[0].replace(/\+/g, ' ');
      const weightPart = params[1].split('@');
      weight = weightPart.length > 1 ? weightPart[1] : '400';
    } else {
      const weightPart = params[0].split('@');
      fontName = weightPart[0].replace(/\+/g, ' ');
      weight = weightPart.length > 1 ? weightPart[1] : '400';
    }
  
    return {
      fontName: fontName,
      weight: weight
    };
  }
  
  
  
  
  
  
  
  
  
  // Función para aplicar la fuente al cuerpo del documento con el peso
  function applyFontWithWeight(fontName, weight) {
    const fontWeight = parseInt(weight); // Convertir el peso a número entero
    document.body.style.fontFamily = `'${fontName}', sans-serif`;
    document.body.style.fontWeight = fontWeight;
  }
  
  // Función para validar el enlace de Google Fonts
  function isValidGoogleFontsLink(link) {
    return link.startsWith('https://fonts.googleapis.com');
  }
  