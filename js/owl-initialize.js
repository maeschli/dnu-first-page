$(document).ready(function() {
      $("#owl-carousel").owlCarousel({
        autoPlay: 3000,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 5],
        [700, 6],
        [1000, 9],
        [1200, 12],
        [1400, 13],
        [1500, 14],
        [1600, 15]
      ]
      });
    });