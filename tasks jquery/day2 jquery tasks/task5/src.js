$(document).ready(function () {
  var slides = $(".slides");
  var totalSlides = $(".slide").length;
  var currentIndex = 0;

  function showSlide(index) {
    var offset = index * -100;
    slides.css("transform", `translateX(${offset}%)`);
  }

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });
});
