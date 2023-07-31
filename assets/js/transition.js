$(function () {
   $(".transition-top-down").delay(200).each(function (i) {
      $(this).delay(400 / 1.5 * i).queue(function () {
         $(this).css({ "opacity": 1, "transform": "translateY(0)" });
      })
   });

   $(".transition-left-right").delay(200).each(function (i) {
      $(this).delay(400 / 1.5 * i).queue(function () {
         $(this).css({ "opacity": 1, "transform": "translateX(0)" });
      })
   });

});