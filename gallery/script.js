let viewport = document.getElementById("slider__viewport").offsetWidth;

let btnNext = document.getElementById("slider__control-next");
let btnPrev = document.getElementById("slider__control-prev");

let slider = document.querySelector("div.slider");

let viewSliders = document.querySelectorAll(".viewSlide");

let viewSlide = 0;

viewSliders[0].style.backgroundColor = "#EB5284";

btnNext.addEventListener("click", function () {
  viewSliders[viewSlide].style.backgroundColor = "#FADADD";

  if (viewSlide < 6) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }

  viewSliders[viewSlide].style.backgroundColor = "#EB5284";
  slider.style.left = -viewSlide * viewport + "px";
});

viewSliders[0].style.backgroundColor = "#EB5284";

btnPrev.addEventListener("click", function () {
  viewSliders[viewSlide].style.backgroundColor = "#FADADD";

  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 6;
  }

  viewSliders[viewSlide].style.backgroundColor = "#EB5284";
  slider.style.left = -viewSlide * viewport + "px";
});
