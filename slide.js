const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = slides.children.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);