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
  card.addEventListener('mouseover', function(){
    const captionContainer = document.createElement('div');
    captionContainer.classList.add('caption');
    const title = document.createElement('h4');
    const description = document.createElement('p');

    title.innerHTML = 'Lorem Ipsum';
    description.innerHTML = 'Lorem Ipsum dolor sit amet';

    captionContainer.classList.add('fade-in');

    captionContainer.append(title, description);
    card.append(captionContainer);
  })
})

card.forEach(card => {
  card.addEventListener('mouseout', function(){
    const captionContainer = document.querySelector('.caption');

    captionContainer.remove()
  })
})