
/* funcion popup */

function openModal(category, event) {
  event.preventDefault(); // Evitar el desplazamiento hacia el inicio de la página
  var modalId = "modal-" + category;
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}


/* funcion para que muestre las imagenes de los botones */

function mostrarImagenes(id) {
  var imagenes = document.getElementsByClassName('grid-gallery__image');

  // Mostrar todas las imágenes
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = 'block';
  }

  // Si se selecciona un ID específico, ocultar las imágenes que no coinciden
  if (id !== 'todos') {
    var imagenesOcultar = document.querySelectorAll('[id^="img-"]:not([id^="img-' + id + '"])');
    for (var j = 0; j < imagenesOcultar.length; j++) {
      imagenesOcultar[j].style.display = 'none';
    }
  }

  // Resaltar el botón seleccionado
  var botones = document.getElementsByClassName('btn');
  for (var k = 0; k < botones.length; k++) {
    botones[k].classList.remove('btn-selected');
  }
  var botonSeleccionado = document.getElementById('btn-' + id);
  botonSeleccionado.classList.add('btn-selected');
}


$(document).ready(function () {
  $(".accordion-titel").click(function () {
    $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    $(this)
      .parent(".accordion-item")
      .prevAll(".accordion-item")
      .find(".accordion-contant")
      .slideUp();
    $(this)
      .parent(".accordion-item")
      .nextAll(".accordion-item")
      .find(".accordion-contant")
      .slideUp();
  });
});


/* mapa */

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -34.7362, lng: -58.4473};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
