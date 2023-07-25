function openModal(category, event) {
  event.preventDefault();
  var modalId = "modal-" + category;
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}
function mostrarImagenes(id) {
  var imagenes = document.getElementsByClassName('grid-gallery__image');
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = 'block';
  }
  if (id !== 'todos') {
    var imagenesOcultar = document.querySelectorAll('[id^="img-"]:not([id^="img-' + id + '"])');
    for (var j = 0; j < imagenesOcultar.length; j++) {
      imagenesOcultar[j].style.display = 'none';
    }
  }
  var botones = document.getElementsByClassName('btn');
  for (var k = 0; k < botones.length; k++) {
    botones[k].classList.remove('btn-selected');
  }
  var botonSeleccionado = document.getElementById('btn-' + id);
  if (botonSeleccionado) {
    botonSeleccionado.classList.add('btn-selected');
  }
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
$(document).ready(function(){
  $('.menu-icon').on('click',function(){
      $('nav').slideToggle();
  })
})


