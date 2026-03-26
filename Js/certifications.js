document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.cert-slide');
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  let currentIndex = 0;
  let slideInterval;

  // Show only the first slide initially
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });

  // Function to show slide by index and hide others
  function showSlide(index) {
    // Wrap around index if out of bounds
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    slides.forEach(slide => (slide.style.display = 'none'));
    slides[index].style.display = 'block';
    currentIndex = index;
  }

  // Show next/prev slides on button clicks
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Auto-rotate slides every 5 seconds
  function startSlideshow() {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  }
  startSlideshow();

  // (Optional) Pause auto-rotation when mouse enters the slider, resume on leave
  const slider = document.querySelector('.cert-slider');
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', startSlideshow);
});
