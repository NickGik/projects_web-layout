const parameters = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};


function setTabs(parameters) {
  const tabBtns = document.querySelectorAll(`.${parameters.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${parameters.wrap}`);
    const currentContent = wrap.querySelector(`.${parameters.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${parameters.content}`);

    contents.forEach((el) => {
      el.classList.remove(parameters.active);
    });

    currentContent.classList.add(parameters.active);

    tabBtns.forEach((el) => {
      el.classList.remove(parameters.active);
    });

    this.classList.add(parameters.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(parameters);


catalogBtn.forEach((catalogBtn) => {
  catalogBtn.addEventListener("click", function() {
    catalogBtn.classList.add("activi");
  })
})



