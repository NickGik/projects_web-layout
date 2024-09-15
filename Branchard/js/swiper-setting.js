var swiper = new Swiper(".swiper1", {
  slidesPerView: 1,
  loop: false,
  freeMode: true,
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
    delay: 4000,
  },
  speed: 10000,
});


var swiper = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 44,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 38,
      grabCursor: true,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 34,
      grabCursor: true,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 44
    }
  },
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});


var swiper = new Swiper(".swiper3", {
  slidesPerView: 3,
  spaceBetween: 50,
    breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 34,
      grabCursor: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 27
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
    dynamicMainBullets: 2,
  },
});


var swiper = new Swiper(".swiper4", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: false,
  autoWidth: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});


// a11y: false,
// keyboard: {
//   enabled: true,
//   onlyInViewport: true
// },
