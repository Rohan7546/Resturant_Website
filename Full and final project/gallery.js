var numbertag = 1;
showSlides(numbertag);

function formerSlides(n) {
  showSlides(numbertag += n);
}

function currentSlide(n) {
  showSlides(numbertag = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {numbertag = 1}
  if (n < 1) {numbertag = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[numbertag-1].style.display = "block";
  dots[numbertag-1].className += " active";
  captionText.innerHTML = dots[numbertag-1].alt;
}