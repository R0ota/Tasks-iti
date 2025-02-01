$(document).ready(function () {
  var currentIndex = 0;

  var thumbnails = $(".image");
  var modal = $(".modal");
  var mainImage = $(".main-image");

  function updateMainImage(index) {
    currentIndex = index;
    var imgSrc = thumbnails.eq(index).attr("src");
    mainImage.attr("src", imgSrc);
  }

  thumbnails.on("click", function () {
    var index = $(this).index();
    updateMainImage(index);
    modal.fadeIn();
  });

  $(".next").on("click", function () {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
  });

  $(".prev").on("click", function () {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
  });

  $(".close, .modal").on("click", function (e) {
    if ($(e.target).is(".modal") || $(e.target).is(".close")) {
      modal.fadeOut();
    }
  });

  // Prevent modal content click from closing modal
  $(".modal-content").on("click", function (e) {
    e.stopPropagation();
  });
});
