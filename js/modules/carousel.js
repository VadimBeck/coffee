$(function () {  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      autoplay: true,
      animateOut: 'fadeOut'
    });
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.scrolled').addClass("is-active");
    } else {
        $('.scrolled').removeClass("is-active");
    }
  });

});