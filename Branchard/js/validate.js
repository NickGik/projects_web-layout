document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.contacts__input-text', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Вы не ввели имя"
      }
    ])
    .addField('.contacts__input-tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Недопустимый формат',
    }]);
})
