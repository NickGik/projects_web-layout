let navbarBtn = document.querySelector('.header__main-navbar__open');
let overlay = document.querySelector('.header__main-navbar__burger-block');
let menuClosed = document.querySelector('.header__main-navbar__btn-close');
let menuLinks = document.querySelectorAll('.header__main-navbar__burger__links');
let page = document.querySelector('.page'); //body


navbarBtn.addEventListener('click', function() {
  overlay.classList.toggle("header__main-navbar__burger-block_active");

  page.classList.add("stop-scroll");
})


menuClosed.addEventListener('click', function() {
  overlay.classList.toggle("header__main-navbar__burger-block_active");
  page.classList.remove("stop-scroll");
})

menuLinks.forEach((el) => {
  el.addEventListener('click', function() {
    overlay.classList.remove("header__main-navbar__burger-block_active");
    page.classList.remove("stop-scroll");
  })
})
