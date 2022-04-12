const body = document.querySelector('.body');
const popup = body.querySelector('.popup');
const editButton = body.querySelector('.profile__edit-button');
const profileInfoTitle = body.querySelector('.profile__info-title'); 
const profileInfoCurenetText = body.querySelector('.profile__info-curenet-text');
const closeButtonPopup = popup.querySelector('.popup__close-button');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');

function openPopup() {
  popup.classList.add('popup_opened');

  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoCurenetText.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileInfoTitle.textContent = nameInput.value;
    profileInfoCurenetText.textContent = jobInput.value;

    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButtonPopup.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);