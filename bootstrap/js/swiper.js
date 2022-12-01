  var swiper1 = new Swiper('.swiper1', {
     //   spaceBetween: 30,
       centeredSlides: true,
       autoplay: {
         delay: 2500,
         disableOnInteraction: false,
       },
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });
     var swiper2 = new Swiper('.swiper2', {
       effect: 'coverflow',
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: 'auto',
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows : true,
       },
       pagination: {
         el: '.swiper-pagination',
       },
     });
 
