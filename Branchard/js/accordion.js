const accordionBtns = document.querySelectorAll(".catalog__accordion-btn");


accordionBtns.forEach((accordionBtns) => {
  accordionBtns.addEventListener("click", event => {

    accordionBtns.classList.toggle("active");
    accordionBtns.classList.toggle("open");

    const accordionContent = accordionBtns.nextElementSibling;
    if(accordionBtns.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";

    }
    else {
      accordionContent.style.maxHeight = 0;
    }

    accordionContent.classList.toggle("borderColor");
  });
});






