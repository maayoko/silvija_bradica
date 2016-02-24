$(document).ready(function() {

  $(".nav ul li:nth-child(even) a").click(function() {
    $(".nav ul li:nth-child(even) a").removeClass("selected");
    $(this).attr("class", "selected");
  });

  var cntr = 1;
  // SLIDER
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

    $(".slidesjs-pagination-item a").html("<img src='resources/img/beauty_01_b.jpg' />");
    changePhotos();
  });

  function changePhotos() {
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



});
