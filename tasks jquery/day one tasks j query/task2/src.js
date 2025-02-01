$(".tab").click(function () {
  var index = $(this).index();
  $(".tab").removeClass("active");
  $(".tab-content").hide();
  $(this).addClass("active");
  $(".tab-content").eq(index).show();
});
