document.addEventListener('DOMContentLoaded', () => {
  // Select all slides and nav buttons
  const slides = document.querySelectorAll('.cert-slide');
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  let currentIndex = 0;

  // Ensure only the first slide is visible initially
  slides.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'block' : 'none';
  });

  // Function to show a slide at a given index
  function showSlide(index) {
    // If index is out of range, wrap it around
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    // Show the selected slide
    slides[index].style.display = 'block';
    currentIndex = index;
  }

  // Click event for Previous button
  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
  // Click event for Next button
  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // (Optional) Auto-play slides every 5 seconds:
  // setInterval(() => {
  //   showSlide(currentIndex + 1);
  // }, 5000);
});
