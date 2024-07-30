let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
let vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

jQuery(function ($) {
  $.scrollTo(0);

  $("#link1_1").click(function () {
    $.scrollTo($("#fuksowka"), 500);
  });
  $("#link1_2").click(function () {
    $.scrollTo($("#zerowka"), 500);
  });

  $(".scrollupTOP").click(function () {
    $.scrollTo($("body"), 1000);
  });

  $(".scrollUP").click(function () {
    $.scrollTo($(window).scrollTop() - 0.46 * vw, 500);
  });

  $(".scrollDOWN").click(function () {
    $.scrollTo($(window).scrollTop() + 0.46 * vw, 500);
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $(".scrollupTOP").fadeIn();
  else $(".scrollupTOP").fadeOut();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $(".scrollUP").fadeIn();
  else $(".scrollUP").fadeOut();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $(".scrollDOWN").fadeIn();
  else $(".scrollDOWN").fadeOut();
});

// console.clear();
//  var template = $("#section .item:first").clone();
// var items = document.querySelectorAll(".item");
// var activeItem = 0;

// $(".next").click(function (event) {
//    event.preventDefault();
//  if (items.length > 1 && activeItem < items.length - 1) {
//    activeItem++;
//    TweenMax.to(window, 1, { scrollTo: items[activeItem] });
//    }
//  });
//  $(".prev").click(function (event) {
//   event.preventDefault();
//  if (items.length > 1 && activeItem > 0) {
//    activeItem--;
//     TweenMax.to(window, 1, { scrollTo: items[activeItem] });
//   }
// });
