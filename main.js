/*slideIndex will be 1, this is my first img.
Then call showSlides(slideIndex) to display my first img.
When I click one of the buttons plusSlides(n)
the plusSlides(n) function subtracts one or adds one to the slideIndex.
The showSlides() function hides (display="none") all elements with the class name 
"mySlides", and displays (display="block") the element with the given slideIndex.
If the slideIndex is higher than the number of elements (x.length), the slideIndex 
is set to zero.
If the slideIndex is less than 1 it is set to number of elements (x.length).*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
