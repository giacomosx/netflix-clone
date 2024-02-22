import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 6
        }
    },
    spaceBetween: 5,
    grabCursor: true,
    loop: true
  });
