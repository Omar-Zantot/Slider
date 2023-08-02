const images = [
  "./imgs/1.jpg",
  "./imgs/2.jpg",
  "./imgs/3.jpg",
  "./imgs/4.jpg",
  "./imgs/6.jpg",
];

const innerImg = document.getElementById("inner-img");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateSlide() {
  innerImg.src = images[currentSlide];

  // Update the dots to highlight the current slide
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Add event listener for each dot to handle click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => setSlide(index));
});

function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  updateSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  updateSlide();
}

function setSlide(index) {
  currentSlide = index;
  updateSlide();
}

leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);

updateSlide();
