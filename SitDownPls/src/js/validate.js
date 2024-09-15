import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', function () {

  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  const form = document.querySelector('.form'); // Добавил получение элемента формы

  const validator = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#ff3030',
      borderColor: '#FF6972',
    },
    successLabelStyle: {
      color: '#20b418',
      borderColor: '#B8EC64', 
    },
    validateBeforeSubmitting: true,
  });

  validator
    .addField('.input-name', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели имя",
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Вы ввели недостаточно символов",
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Вы ввели слишком много символов", // Исправил текст ошибки
      },
      {
        rule: 'customRegexp',
        value: /[а-я]+/, // Исправил регулярное выражение
        errorMessage: "Недопустимый формат",
      },
    ])
    
    .addField('.input-tel', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
      {
        rule: 'function',
        validator: function (field, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Телефон должен содержать 10 цифр',
      },
    ])

    .addField('.input-mail', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели email",
      },
      {
        rule: 'customRegexp',
        value: /[a-z]+/,
        errorMessage: "Недопустимый формат",
      },
      {
        rule: 'email',
        errorMessage: "Вы ввели email неправильно",
      },
    ]);

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    if (validator.validate()) {
      // If the form is valid, submit the form
      form.submit();
    }
  });
});
