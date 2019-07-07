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
    if ($(this).scrollTop() > 200 && $(this).width() > 768) {
        $('.scrolled').addClass("is-active");
    } else if ($(this).scrollTop() > 360 && $(this).width() < 768) {
      $('.scrolled').addClass("is-active");
    }
    else {
        $('.scrolled').removeClass("is-active");
    }
  });

  
  let menuBtn = document.querySelector(".toggle-menu");
  let topMenu = document.querySelector(".menu__list");
  let scrolledBtn = document.querySelector(".catalog");
  let scrolledMenu = document.querySelector(".scrolled__goods")
  menuBtn.addEventListener('click', ()=>{ 
    toggleMenu(menuBtn, topMenu);
  })
  scrolledBtn.addEventListener('click', ()=>{ 
    toggleMenu(scrolledBtn, scrolledMenu);
  })


  function toggleMenu(btn, menu) {
    if (btn.classList.contains("is-active")){
      btn.classList.remove("is-active");
      menu.style.maxHeight ="";
    } else {
      btn.classList.add("is-active");
      menu.style.maxHeight = "none";      
      }
    }

    $(".select").selectmenu();    

    $(".ui-slider").slider({
      min: 639,
      max: 1188,
      values: [639,1188],
      range: true
    })

});