$(document).ready(function(){//시작

  $("header .inner .ham-wrap").click(function(){
    $(this).toggleClass('active');
    $("header .inner h1").toggleClass('active');
    $("nav").slideToggle('show');
  });

  $(".m-menu > li").click(function(){

    if($(window).width() < 767){
      if($(this).children(".depth2").css("display")=="block"){
      $(this).children(".depth2").slideUp();
      $(this).children(".arr").find("span").removeClass("move");
    }else{
      $(".depth2").stop().slideUp();
      $(this).children(".depth2").slideDown();
      $(".arr span").removeClass("move");
      $(this).children(".arr").find("span").addClass("move");
    };
    }
    
  });

  AOS.init();

  var swiper = new Swiper(".best-item", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView : 2,
    centeredSlides : true ,
    speed : 1000,
    loop : true 
  });

});//끝