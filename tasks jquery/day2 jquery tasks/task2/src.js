$(document).ready(function () {
  // When the window is scrolled
  $(window).scroll(function () {
    var aboutOffset = $("#about").offset().top; // Get the top position of the "About" section
    var scrollTop = $(window).scrollTop(); // Get the current scroll position
    var firstSectionBottom = $("#one").offset().top + $("#one").outerHeight(); // Bottom of the first section
    console.log(firstSectionBottom);

    if (scrollTop >= aboutOffset) {
      $("ul").css("background", " #30134f  "); // Change sidebar color when reaching "About" section
    } else {
      $("ul").css("background", "palevioletred"); // Restore original color
    }

    // Show or hide the slide-up button
    if (scrollTop > firstSectionBottom) {
      $(".slideUp").fadeIn(); // Show from the second section to the end
    } else {
      $(".slideUp").fadeOut(); // Hide in the first section
    }
  });

  $(".slideUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500); // Scroll to the top of the page
  });
});
