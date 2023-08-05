$(function () {
   $(".transition-top-down").each(function (i) {
      $(this).delay(450 / 1.5 * i).queue(function () {
         $(this).css({ "opacity": 1, "transform": "translateY(0)" });
      })
   });

   $(".transition-left-right").each(function (i) {
      $(this).delay(450 / 1.5 * i).queue(function () {
         $(this).css({ "opacity": 1, "transform": "translateX(0)" });
      })
   });

});