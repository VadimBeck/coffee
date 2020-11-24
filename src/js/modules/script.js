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
    $(".choise__select").selectmenu();
    $(".choise__input").checkboxradio({
      icon: false
    });
  
    $(".ui-slider").slider({
      min: 0,
      max: 9999,
      values: [0,9999],
      range: true,
      stop: function(event, ui) {
        $(".filter__price-min").val($(".ui-slider").slider("values",0));
        $(".filter__price-max").val($(".ui-slider").slider("values",1));
      },
      slide: function(event, ui){
          $(".filter__price-min").val($(".ui-slider").slider("values",0));
          $(".filter__price-max").val($(".ui-slider").slider("values",1));
      }
    })
        
    const selects = document.querySelectorAll('.select');
    for (let i=0; i <= selects.length; i++) {
      $(`#select${i}`).ddslick({
        width: "auto",
        background: 'none'
      })
    };

    $(".product-count__plus").click(function(){
      let input = $(this).siblings(".product-count__num");
      input.val(+input.val()+1);
    })
    $(".product-count__minus").click(function(){
      let input = $(this).siblings(".product-count__num");
      if(input.val()>1){
        input.val(input.val()-1);
      }
    })    
});