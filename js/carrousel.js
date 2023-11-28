var currentIndex = 0;
var totalItems = document.querySelectorAll('.carousel-item').length;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  var newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel-inner').style.transform = 'translateX(' + newTransformValue + ')';
}

document.addEventListener('DOMContentLoaded', function () {
  // Agrega eventos de clic a los botones de control
  document.querySelector('.prev').addEventListener('click', function () {
    changeSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', function () {
    changeSlide(1);
  });
});
