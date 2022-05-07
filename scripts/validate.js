function enableValidation(options) {
  const formList = document.querySelectorAll(options.formSelector);

  formList.forEach( (form) => {
    const inputList = [...form.querySelectorAll(options.inputSelector)];
    const buttonElement = form.querySelector(options.submitButtonSelector);

    inputList.forEach( (element) => {
      const formError = form.querySelector(`.${element.id}-error`);
      element.addEventListener('input', () => {
        isValid(element, formError, options.inputErrorClass, options.errorClass)
        toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
      });
    });
  });
};

function showInputError(element, formError, inputErrorClass, errorClass) {
    element.classList.add(inputErrorClass);
    formError.classList.add(errorClass);
    formError.textContent = element.validationMessage;
};

function hideInputError(element, formError, inputErrorClass, errorClass) {
  element.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
  formError.textContent = '';
};

function isValid(element, formError, inputErrorClass, errorClass) {
  if ( !element.checkValidity() ) {
    showInputError(element, formError, inputErrorClass, errorClass)
  } else (
    hideInputError(element, formError, inputErrorClass, errorClass)
  )
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {

    return !inputElement.checkValidity();
  });
};

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled'
});