let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("testimonial-slide");
  const dots = document.getElementsByClassName("dot");
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function setSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}

function createDots() {
  const slides = document.getElementsByClassName("testimonial-slide");
  const dotsContainer = document.getElementById("testimonial-dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => setSlide(i);
    dotsContainer.appendChild(dot);
  }
}

window.onload = function() {
  createDots();
  showSlide(currentSlide);

  // Optional: Auto-slide every 7 seconds
  setInterval(() => {
    changeSlide(1);
  }, 7000);
};