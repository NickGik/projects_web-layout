const swiperOne = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  direction: 'horizontal',
  freeMode: false,
  loop: false,
  speed: 3000,
  autoplay: {
      delay: 2000,
    },
  // pagination
  pagination: {
    el: '.hero-swiper-pagination',
    clickable: true,
    dynamicMainBullets: 3,
  }
});


const swiperTwo = new Swiper('.special-swiper', {
  slidesPerView: "auto",
  direction: 'horizontal',
  spaceBetween: 32,
  freeMode: false,
  loop: false,
  speed: 400,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 32,
      grabCursor: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
      grabCursor: true,
    },
    1251: {
      slidesPerView: "auto",
      spaceBetween: 32
    }
  },
  navigation: {
    nextEl: ".special-swiper-buttnom-next",
    prevEl: ".special-swiper-button-pre",
  },
});


const swiperThree = new Swiper('.userful-swiper', {
  slidesPerView: 2,
  direction: 'horizontal',
  spaceBetween: 32,
  loop: false,
  speed: 400,
  navigation: {
    nextEl: ".userful-swiper-buttnom-next",
    prevEl: ".userful-swiper-button-pre",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 38,
      grabCursor: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1251: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  },
});


const swiperFour = new Swiper('.cart-swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  direction: 'horizontal',
  freeMode: false,
  loop: false,
  speed: 1000,
  // autoplay: {
  //     delay: 3000,
  //   },
  navigation: {
    nextEl: ".cart-swiper-button-next",
    prevEl: ".cart-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
      grabCursor: true,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 32,
      grabCursor: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1261: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  },
});
  

const swiperFive = new Swiper('.swiper-cart-mod', {
  slidesPerView: 3,
  spaceBetween: 32,
  direction: 'horizontal',
  freeMode: true,
  loop: false,
  speed: 1000,
  // autoplay: {
  //     delay: 3000,
  //   },
  navigation: {
    nextEl: ".swiper-button-next-cart",
    prevEl: ".swiper-button-prev-cart",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 130,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 78
    }
  },
});