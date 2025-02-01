$(".container img").click(function () {
  var src = $(this).attr("src");
  $(".layer img").attr("src", src);
  $(".layer").fadeIn(500);
});

$(".layer").click(function (e) {
  // Check if the clicked target is the layer itself
  console.log(e.target);

  if ($(e.target).is(".content")) {
    $(this).hide(200);
  }
});

// Prevent closing when clicking on buttons or image
$(".layer .content button, .layer .content img").click(function (e) {
  e.stopPropagation();
});
var counter = 0;
var imgArr = ["images/1.jpg", "images/2.webp", "images/3.jpg", "images/4.jpg"];

$("#next").click(function () {
  counter++;
  if (counter >= imgArr.length) {
    counter = 0; // Reset to the first image
  }
  $(".layer img").attr("src", imgArr[counter]);
});

$("#prev").click(function () {
  counter--;
  if (counter < 0) {
    counter = imgArr.length - 1; // Reset to the last image
  }
  $(".layer img").attr("src", imgArr[counter]);
});
