/*Preferiblemente solo modificar los apartados que digan "modificar" */

// Codigo para cambiar las imagenes del apartado de imagenes estaticas con contenedores de información 
//No modificable
window.addEventListener('scroll', function() {
    let firstSection = document.querySelector('.static-bg');
    let secondSection = document.querySelector('.dynamic-bg');
    let firstSectionBottom = firstSection.getBoundingClientRect().bottom;
    let secondSectionBottom = secondSection.getBoundingClientRect().bottom;
  
    if (firstSectionBottom <= window.innerHeight && secondSectionBottom >= window.innerHeight) {
      firstSection.style.display = 'block';
      secondSection.style.display = 'none';
    } else {
      firstSection.style.display = 'none';
      secondSection.style.display = 'block';
    }
  });
  