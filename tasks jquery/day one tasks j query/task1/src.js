$(".container").animate({ width: "100%", height: "100vh" }, 1000);
$("h1").fadeIn(1500, function () {
  $("p").fadeIn(1500, function () {
    // $(".product").slideDown(function(){
    $(".product img")
      .eq(0)
      .slideDown(1000, function () {
        $(".product img")
          .eq(1)
          .slideDown(1000, function () {
            $(".product img").eq(2).slideDown(1000);
          });
      });
  });
  // });
});
