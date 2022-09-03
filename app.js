var slides = document.getElementsByClassName("carousel-item");
console.log(slides);
var dots = document.querySelectorAll(".dot");
console.log(dots);

var currentslide = 1;

//previous icon
document.getElementById("prev").addEventListener("click", function () {
  carousel((currentslide -= 1));
});

//next icon
document.getElementById("next").addEventListener("click", function () {
  carousel((currentslide += 1));
});

for (var q = 0; q < dots.length; q++) {
  dots[q].addEventListener("click", function () {
    // console.log(this.getAttribute("data-bs-slide-to"));
    currentslide = this.getAttribute("data-bs-slide-to");
    carousel(currentslide);
  });
}
carousel(currentslide);
var x, y;
function carousel(slidenum) {
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  for (y = 0; y < dots.length; y++) {
    dots[y].classList.remove("active");
  }

  if (slidenum > slides.length) {
    currentslide = 1;
  } else if (slidenum < 1) {
    currentslide = slides.length;
  }
  console.log(currentslide);
  slides[currentslide - 1].style.display = "block";
  dots[currentslide - 1].className = "dot active";
}
