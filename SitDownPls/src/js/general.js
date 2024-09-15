// Часть 1: Добавление класса при клике на кнопку
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".hige-rating__btn");
    const t = document.querySelector(".hige-rating__articles-row__last");
    
    e.addEventListener("click", () => {
        console.log("Button clicked");
        t.classList.add("articles_active");
    });
});


// Часть 2: Управление модальным окном корзины
document.addEventListener("DOMContentLoaded", () => {
    const select = (selector) => document.querySelector(selector);
    const toggleClass = (element, className, active) => element.classList.toggle(className, active);
  
    const openModalCartButtons = document.querySelectorAll(".cart-price__btn-buy, .cart-price__btn-buy1");
    const closeModalCartButtons = document.querySelectorAll(".cart-modal-block__btn-close");
    const submitBtnCart = select(".modal-content__btn");
    const cartModal = select(".cart-modal");
    const cartModalContent = select(".modal-content");
    const cartModalContentThank = select(".modal-thank");
    const pageMod = document.querySelector(".page");
  
    const toggleCartModal = () => toggleClass(cartModal, "cart-modal_active");
    const togglePageScroll = () => toggleClass(pageMod, "stop-scroll");
    const toggleModalContent = () => {
      toggleClass(cartModalContent, "modal-content_active", true);
      toggleClass(cartModalContentThank, "modal-thank_active", true);
    };
    const closeAllModals = () => {
      toggleClass(cartModal, "cart-modal_active", false);
      toggleClass(cartModalContent, "modal-content_active", false);
      toggleClass(cartModalContentThank, "modal-thank_active", false);
      toggleClass(pageMod, "stop-scroll", false);
    };
  
    openModalCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleCartModal();
        togglePageScroll();
      });
    });
  
    closeModalCartButtons.forEach((button) => {
      button.addEventListener("click", closeAllModals);
    });
  
    submitBtnCart.addEventListener("click", toggleModalContent);
});
  

// Часть 3: Управление модальным окном корзины D31
document.addEventListener("DOMContentLoaded", () => {
    const select = (selector) => document.querySelector(selector);
    const toggleClass = (element, className, active) => element.classList.toggle(className, active);

    const cartOpenModal = select(".cart__img");
    const cartCloseModal = select(".cart-modal-d31-img__btn");
    const cartD31 = select(".cart-modal-d31");

    cartOpenModal.addEventListener("click", () => toggleClass(cartD31, "cart-modal-d31_active", true));
    cartCloseModal.addEventListener("click", () => toggleClass(cartD31, "cart-modal-d31_active", false));
});


// Часть 4: Добавление класса при клике на кнопку
document.addEventListener("DOMContentLoaded", () => {
    const openBurger = document.querySelector(".header-center__btn-menu"); 
    const closeBurger = document.querySelector(".burger-content__btn-close");
    const burger = document.querySelector(".burger-container");
    const linkBurger = document.querySelectorAll(".burger-nav__link");
    const page = document.querySelector(".page");

    openBurger.addEventListener('click', () => {
        burger.classList.add("burger-container_active");
        page.classList.add("stop-scroll");
    })

    closeBurger.addEventListener('click', () => {
        burger.classList.remove("burger-container_active");
        page.classList.remove("stop-scroll");
    })

    linkBurger.forEach((el) => {
        el.addEventListener('click', () => {
            burger.classList.remove("burger-container_active");
            page.classList.remove("stop-scroll");
        })
      })
});