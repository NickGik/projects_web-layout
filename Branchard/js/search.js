const btnSearch = document.querySelector(".header__main__search-icon");
const blockSearch = document.querySelector('.header__main__search-block');
const btnSearchClose = document.querySelector('.header__main__search-btn__cross');

btnSearch.addEventListener('click',function() {
  blockSearch.classList.add("header__main__search-block_active");
  }
);

btnSearchClose.addEventListener('click',function() {
  blockSearch.classList.remove("header__main__search-block_active");
  }
);
