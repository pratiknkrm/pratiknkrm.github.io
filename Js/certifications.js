document.addEventListener('DOMContentLoaded', () => {
  // Grab slides
  const slides = document.querySelectorAll('.cert-slide');
  if (!slides.length) return; // Nothing to do if no slides

  // Optional nav buttons (safe even if not present)
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');

  // Slider container (optional for hover pause)
  const slider = document.querySelector('.cert-slider');

  let currentIndex = 0;
  let slideInterval = null;

  // Initialize slides (show first only)
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });

  // Core slide display logic
  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
    currentIndex = index;
  }

  // Manual navigation (if buttons exist)
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  // Auto‑rotation
  function startSlideshow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000); // 5 seconds
  }

  startSlideshow();

  // Pause on hover (only if container exists)
  if (slider) {
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
      startSlideshow();
    });
  }
});
``
