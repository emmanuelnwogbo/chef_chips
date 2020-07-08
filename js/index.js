const slider = document.getElementById("slider");
const slider2 = document.querySelectorAll(".products__slide")[0];
const slider2check = document.getElementById("slider-2-check");
const slider2check2 = document.getElementById("slider-2-check2");
const slider2nav = document.querySelectorAll(".products--nav-span");
const productsnavLeft = document.getElementById("product-navleft");
const productsnavRight = document.getElementById("product-navright");
const burger = document.getElementById("burger");
const dropdown = document.getElementById("dropdown");
const dropdownCheck = document.getElementById("dropdown-check");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const sliderSlides = document.querySelectorAll(".slider__slide");

let tracker = 1;
let productSlideTracker = 1;

setInterval(function () {
  if (tracker < 3) {
    tracker += 1;
    Array.from(sliderSlides).forEach((item) => {
      item.classList.contains(`slider__slide-${tracker}`)
        ? item.classList.add("visible-slide")
        : item.classList.remove("visible-slide");
    });
  } else {
    tracker = 1;
    Array.from(sliderSlides).forEach((item) => {
      item.classList.contains(`slider__slide-${tracker}`)
        ? item.classList.add("visible-slide")
        : item.classList.remove("visible-slide");
    });
  }
}, 5000);

slider2nav[0].style.background = `#ffcf3b`;
productsnavRight.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    if (slider2check.checked) {
      slider2check2.checked = true;
      slider2nav[1].style.background = `#fff`;
      slider2nav[2].style.background = `#ffcf3b`;
      return;
    }
  }

  slider2check.checked = true;
  slider2nav[0].style.background = `#fff`;
  slider2nav[1].style.background = `#ffcf3b`;
});

productsnavLeft.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    if (slider2check2.checked) {
      slider2check2.checked = false;
      slider2nav[1].style.background = `#ffcf3b`;
      slider2nav[2].style.background = `#fff`;
      return;
    }
  }

  slider2check.checked = false;
  slider2nav[0].style.background = `#ffcf3b`;
  slider2nav[1].style.background = `#fff`;
  if (slider2.classList.contains("products__slide-moved1")) {
    slider2.classList.remove("products__slide-moved1");
  }
});

function initMap() {
  console.log("hello there");
  /*var addre = { lat: 6.7148901, lng: 3.2231429 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: addre,
  });
  var marker = new google.maps.Marker({ position: addre, map: map });*/
}

burger.addEventListener("click", function (event) {
  dropdownCheck.checked
    ? (dropdownCheck.checked = false)
    : (dropdownCheck.checked = true);
});

Array.from(dropdownItems).forEach((item) => {
  item.addEventListener("click", function () {
    dropdownCheck.checked
      ? (dropdownCheck.checked = false)
      : (dropdownCheck.checked = true);
  });
});
