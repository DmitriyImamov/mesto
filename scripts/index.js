let body = document.querySelector('.body');
let popup = body.querySelector('.popup');
let editButton = body.querySelector('.edit-button');
let popupСloseButton = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');
let popupInputName = popup.querySelector('.popup__input-name');
let popupInputJob = popup.querySelector('.popup__input-job');
let profileInfoTitle = body.querySelector('.profile__info-title');
let profileInfoCurenetText = body.querySelector('.profile__info-curenet-text');

function popupOpened(event) {
  if (event.target === event.currentTarget) {
    popup.classList.toggle('popup_opened');
  }

  popupInputName.value = profileInfoTitle.textContent;
  popupInputJob.value = profileInfoCurenetText.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileInfoTitle.textContent = popupInputName.value;
  profileInfoCurenetText.textContent = popupInputJob.value;

  popupOpened(evt);
}

editButton.addEventListener('click', popupOpened);
popupСloseButton.addEventListener('click', popupOpened);
popup.addEventListener('click', popupOpened);
popupSaveButton.addEventListener('click', formSubmitHandler);
popup.addEventListener('submit', formSubmitHandler); 