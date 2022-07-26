$(function () {
  let header = $(".header");
  let main = $(".main");
  $(window).scroll(function () {
    if ($(this).width() > '730') {
      if ($(this).width() > '1230') {
        if ($(this).scrollTop() > 770) {
          header.addClass("header_fixed");
          main.addClass("mt-50");
        } else {
          header.removeClass("header_fixed");
          main.removeClass("mt-50");
        }
      }
      else if ($(this).width() > '1152') {
        if ($(this).scrollTop() > 705) {
          header.addClass("header_fixed");
          main.addClass("mt-50");
        } else {
          header.removeClass("header_fixed");
          main.removeClass("mt-50");
        }
      }
      else if ($(this).width() > '1037') {
        if ($(this).scrollTop() > 635) {
          header.addClass("header_fixed");
          main.addClass("mt-50");
        } else {
          header.removeClass("header_fixed");
          main.removeClass("mt-50");
        }
      }
      else if ($(this).width() < '1037') {
        if ($(this).scrollTop() > 585) {
          header.addClass("header_fixed");
          main.addClass("mt-50");
        } else {
          header.removeClass("header_fixed");
          main.removeClass("mt-50");
        }
      }
    }
  });
});

$('#closeBurger').click(() => {
  $('#menu__toggle').click()
})

$('.hamburger__menu-item').click(() => {
  $('#menu__toggle').click()
})