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



gsap.registerPlugin(ScrollTrigger);

gsap.from('#newReleases', {
  scrollTrigger: '#newReleases',
  opacity: 0,
  delay: 0.1
});

gsap.from('#upcoming', {
  scrollTrigger: '#upcoming',
  opacity: 0,
  delay: 0.1
});

gsap.from('#forYou', {
  scrollTrigger: '#forYou',
  opacity: 0,
  delay: 0.1
});

gsap.from('footer', {
  scrollTrigger: 'footer',
  opacity: 0,
  delay: 0.1
});


const card = document.querySelectorAll('.swiper-slide');

card.forEach(card => {
  const captionContainer = document.createElement('div');
  captionContainer.classList.add('caption');
  const title = document.createElement('h5');
  const description = document.createElement('p');

  title.innerHTML = 'Movie Title';
  description.innerHTML = 'A simple description.';

  captionContainer.append(title, description);
  card.append(captionContainer);
})