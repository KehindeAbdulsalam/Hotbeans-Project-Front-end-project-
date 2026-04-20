
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function changeSlide(n){
  index += n;

  if(index >= slides.length) index = 0;
  if(index < 0) index = slides.length - 1;

  showSlide(index);
}


setInterval(() => {
  changeSlide(1);
}, 5000);
