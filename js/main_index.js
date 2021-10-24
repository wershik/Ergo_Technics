$(function(){

  $('.slaider').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    dots: true,
    dotsClass: 'slick-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 200000,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipeToSlide: false
  });



  $('.header-burger').on('click', function(){
    $('.header-menu-list').slideToggle();
  });

});
