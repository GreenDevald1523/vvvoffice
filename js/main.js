$(function () {
  let header = $(".header");
  let main = $(".main");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 715) {
      header.addClass("header_fixed");
      main.addClass("mt-50");
    } else {
      header.removeClass("header_fixed");
      main.removeClass("mt-50");
    }
  });
});

