//mobile menu
var burger = document.querySelector(".burger");
var mobileMenu = document.querySelector(".mobile__menu");
var middleLine = document.querySelector(".middle-line");
var topLine = document.querySelector(".top-line");
var bottomLine = document.querySelector(".bottom-line");

burger.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-mobile");
  middleLine.classList.toggle("cross-middle");
  topLine.classList.toggle("cross-top");
  bottomLine.classList.toggle("cross-bottom");
});

//slider onclick
var sliderItems = document.querySelectorAll(".slider-item");
var sliderControls = document.querySelectorAll(".slider-control");

function sliderMover(n) {
  for (let j = 0; j < sliderControls.length; j++) {
    sliderControls[j].classList.remove("active-control");
    sliderItems[j].classList.remove("active-item");
  }
  sliderControls[n].classList.add("active-control");
  sliderItems[n].classList.add("active-item");
}

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener("click", () => sliderMover(i));
}


//slider auto
let z = 0;

function autoSlide() {
  for (let j = 0; j < sliderControls.length; j++) {
    sliderControls[j].classList.remove("active-control");
    sliderItems[j].classList.remove("active-item");
  }
  sliderControls[z].classList.add("active-control");
  sliderItems[z].classList.add("active-item");

  if (z + 1 == sliderControls.length) {
    z = 0;
  } else {
    z++;
  }
}

setInterval(autoSlide, 5000);