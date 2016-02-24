// START THIS SCRIPT WHEN DOM IS LOADED
$(document).ready(function() {

  //
  $(".nav ul li:nth-child(even) a").click(function() {
    $(".nav ul li:nth-child(even) a").removeClass("selected");
    $(this).attr("class", "selected");
  });


  // SLIDER - USING jQUERY SLIDES+9
  $(function() {
    $('#slides').slidesjs({
      width: 1600,
      height: 900,
      start: 5,
      navigation: false,
      effect: {
        slide: {
          speed: 1300
        }
      }
    });

    // ADD NAV IMAGES IN SLIDER
    $(".slidesjs-pagination-item a").html("<img src='resources/img/beauty_01_b.jpg' />");
    changePhotos();
  });

  // SET CORRECT PATH TO THE PHOTOS FOLDER IN IMAGE SLIDER
  function changePhotos() {
    var cntr = 1;
    for(var i = 0; i < 10; i++) {
      if(cntr.toString().length > 1) {
        $(".slidesjs-pagination li:nth-of-type(" + cntr +") a img").attr("src","resources/img/beauty_" + cntr + "_b.jpg");
      } else {
        $(".slidesjs-pagination li:nth-of-type(" + cntr +") a img").attr("src","resources/img/beauty_0" + cntr + "_b.jpg");
      }
      cntr++;
    }
  }

  // FANCY BOX
  $(".fancybox-thumb").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
    maxWidth: 800,
    maxHeight: 800
  })

  // INITIAL BROWSER ZOOM 100%
  document.body.style.zoom = 1.0;

});
