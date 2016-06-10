var clicks = true;
$("#open-menu").click(function() {
  if (clicks) {
    $(".menu").removeClass("out");
    $(".button").addClass("right");
    $(".page").addClass("right");
    clicks = false;
  } else {
    $(".menu").addClass("out");
    $(".button").removeClass("right");
    $(".page").removeClass("right");
    clicks = true;
  }
});


