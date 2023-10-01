const checkNameValidation = (nameInput, errorNameText) => {
  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    errorNameText.textContent = "Введите имя";
    return false;
  }

  nameInput.classList.remove("invalid");
  errorNameText.textContent = "";
  return true;
};

const checkSurNameValidation = (surnameInput, errorSurnameText) => {
  if (surnameInput.value === "") {
    surnameInput.classList.add("invalid");
    errorSurnameText.textContent = "Введите фамилию";
    return false;
  }

  surnameInput.classList.remove("invalid");
  errorSurnameText.textContent = "";
  return true;
};

const checkEmailValidation = (emailInput, errorEmailText) => {
  const emailReg =
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";

  if (emailInput.value === "") {
    emailInput.classList.add("invalid");
    errorEmailText.textContent = "Укажите электронную почту";
    return false;
  } else if (!emailInput.value.match(emailReg)) {
    emailInput.classList.add("invalid");
    errorEmailText.textContent = "Проверьте электронную почту";
    return false;
  }

  emailInput.classList.remove("invalid");
  errorEmailText.textContent = "";
  return true;
};

const formatPhoneInputText = (phoneInput) => {
  if (phoneInput.value.split("")[phoneInput.value.length - 1] !== " ") {
    if (
      phoneInput.value.length === 2 ||
      phoneInput.value.length === 6 ||
      phoneInput.value.length === 10 ||
      phoneInput.value.length === 13
    ) {
      phoneInput.value += " ";
    }
  }
};

const checkPhoneValidation = (phoneInput, errorPhoneText) => {
  const phoneReg = /^\+\d\s[-\(]?\d{3}\)?\s\d{3}\s\d{2}\s\d{2}$/;

  if (phoneInput.value === "") {
    phoneInput.classList.add("invalid");
    errorPhoneText.textContent = "Укажите номер телефона";
    return false;
  } else if (
    phoneInput.value.length > 30 ||
    !phoneInput.value.match(phoneReg)
  ) {
    phoneInput.classList.add("invalid");
    errorPhoneText.textContent = "Формат: +9 999 999 99 99";
    return false;
  }

  phoneInput.classList.remove("invalid");
  errorPhoneText.textContent = "";
  return true;
};

const checkInnValidation = (innInput, errorInnText) => {
  if (innInput.value === "") {
    innInput.classList.add("invalid");
    errorInnText.textContent = "Укажите ИНН";
    return false;
  } else if (innInput.value.length > 14 || !innInput.value.match("^[0-9]+$")) {
    innInput.classList.add("invalid");
    errorInnText.textContent = "Проверьте ИНН";
    return false;
  }

  innInput.classList.remove("invalid");
  errorInnText.textContent = "";
  return true;
};

const checkAllFields = () => {
  const name = document.querySelector("#form-name");
  const errorNameText = document.querySelector("#error-name-text");
  const surname = document.querySelector("#form-surname");
  const errorSurnameText = document.querySelector("#error-surname-text");
  const email = document.querySelector("#form-email");
  const errorEmailText = document.querySelector("#error-email-text");
  const phone = document.querySelector("#form-phone");
  const errorPhoneText = document.querySelector("#error-phone-text");
  const inn = document.querySelector("#form-inn");
  const errorInnText = document.querySelector("#error-inn-text");

  const inputSubmitOrder = document.querySelector("#input-submit-order");

  checkNameValidation(name, errorNameText);
  checkSurNameValidation(surname, errorSurnameText);
  checkEmailValidation(email, errorEmailText);
  checkPhoneValidation(phone, errorPhoneText);
  checkInnValidation(inn, errorInnText);

  if (
    checkNameValidation(name, errorNameText) &&
    checkSurNameValidation(surname, errorSurnameText) &&
    checkEmailValidation(email, errorEmailText) &&
    checkPhoneValidation(phone, errorPhoneText) &&
    checkInnValidation(inn, errorInnText)
  ) {
    inputSubmitOrder.disabled = false;
    return true;
  }

  return false;
};

const checkFormValidation = () => {
  const name = document.querySelector("#form-name");
  const errorNameText = document.querySelector("#error-name-text");
  const surname = document.querySelector("#form-surname");
  const errorSurnameText = document.querySelector("#error-surname-text");
  const email = document.querySelector("#form-email");
  const errorEmailText = document.querySelector("#error-email-text");
  const phone = document.querySelector("#form-phone");
  const errorPhoneText = document.querySelector("#error-phone-text");
  const inn = document.querySelector("#form-inn");
  const errorInnText = document.querySelector("#error-inn-text");

  const inputSubmitOrder = document.querySelector("#input-submit-order");

  checkAllFields();

  if (!inputSubmitOrder.disabled) {
    name.addEventListener("input", () => {
      checkAllFields();
    });

    surname.addEventListener("input", () => {
      checkAllFields();
    });

    email.addEventListener("input", () => {
      checkAllFields();
    });

    phone.addEventListener("input", () => {
      checkAllFields();
    });

    inn.addEventListener("input", () => {
      checkAllFields();
    });
  }

  inputSubmitOrder.disabled = true;

  return checkAllFields();
};
