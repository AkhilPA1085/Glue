$('.parallax-wrapper').scroll(function(){
  var scroll = $('.parallax-wrapper').scrollTop();
  if(scroll > 50){
      $('header').addClass('header-scrolled');
  }else{
      $('header').removeClass('header-scrolled');
  }
});


// pure counter
new PureCounter();

var swiper = new Swiper(".leadershipTeamSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
    },
});


var swiper = new Swiper(".mediaCenterSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });

$(document).ready(function(){
  if($(window).width() < 992){
    $('.mediaCenterSwiper .swiper-wrapper.container').removeClass('container');
  }
})


