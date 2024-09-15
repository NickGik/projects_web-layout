const btnGallery = document.querySelector('.gallery__btn');
const btnModalClose = document.querySelector('.gallery__modal-btn');
const modalblock = document.querySelector('.gallery__modal-block');

btnGallery.addEventListener('click', function () {
  modalblock.classList.add("gallery__modal-block_active");
})

btnModalClose.addEventListener('click', function () {
  modalblock.classList.remove("gallery__modal-block_active");
})
