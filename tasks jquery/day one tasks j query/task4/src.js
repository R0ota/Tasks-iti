$(".img").click(function () {
  var src = $(this).attr("src");

  $(".mainImage").attr("src", src);
});
