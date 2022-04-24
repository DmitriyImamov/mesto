const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const body = document.querySelector('.body');
const popupList = body.querySelectorAll('.popup');
const elemetList = body.querySelector('.elements__list');
const profileEditButton = body.querySelector('.profile__edit-button');
const profileInfoTitle = body.querySelector('.profile__info-title');
const profileInfoCurenetText = body.querySelector('.profile__info-curenet-text');
const profileAddButton = body.querySelector('.profile__add-button');
const popupPlaceProfile = body.querySelector('.popup_place_profile');
const profilePopupForm = popupPlaceProfile.querySelector('.popup__form');
const nameInput = profilePopupForm.querySelector('.popup__input-text_type_name');
const jobInput = profilePopupForm.querySelector('.popup__input-text_type_job');
const popupPlaceElement = body.querySelector('.popup_place_element');
const elementPopupForm = popupPlaceElement.querySelector('.popup__form');
const popupPlaceImage = body.querySelector('.popup_place_image');
const popupImage = popupPlaceImage.querySelector('.popup__image');
const popupImageDescription = popupPlaceImage.querySelector('.popup__image-description');

function getElement(item) {
    const elementTemplate = document.querySelector('#element-template').content.cloneNode(true);
    const element = elementTemplate.querySelector('.element');
    const likeButton = element.querySelector('.element__like-button');
    const removeButton = element.querySelector('.element__remove_button');
    const elementImage = element.querySelector('.element__image');

    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__title').textContent = item.name;

    likeButton.addEventListener('click', toggleLike);
    removeButton.addEventListener('click', () => { removeElement(element) });
    elementImage.addEventListener('click', () => { openPopupImage(item) });

    return element;
}

function openPopupImage(item) {
  popupImage.src = item.link;
  popupImage.setAttribute('alt', item.name);
  popupImageDescription.textContent = item.name;
  openPopup(popupPlaceImage);
}

function toggleLike(event) {
  event.target.classList.toggle('element__like-button_active');
}

function removeElement(element) {
  element.remove();
}

function openPopup(modalWindow) {
  modalWindow.classList.add('popup_opened');
}

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileInfoTitle.textContent = nameInput.value;
  profileInfoCurenetText.textContent = jobInput.value;

  closePopup(popupPlaceProfile);
}

function handleAddElement(evt) {
  evt.preventDefault();

  const titleInput = elementPopupForm.querySelector('.popup__input-text_type_title').value;
  const linkInput = popupPlaceElement.querySelector('.popup__input-text_type_link').value;
  const element = getElement({name: titleInput, link: linkInput});

  elemetList.prepend(element);
  elementPopupForm.reset();

  closePopup(popupPlaceElement);
}

profileEditButton.addEventListener('click',
  function() {
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoCurenetText.textContent;

    openPopup(popupPlaceProfile);
});

profilePopupForm.addEventListener('submit', formSubmitHandler);

profileAddButton.addEventListener('click',
  function() {
    openPopup(popupPlaceElement);
});

elementPopupForm.addEventListener('submit', handleAddElement);

popupList.forEach((popup) => {
    const closePopupButton = popup.querySelector('.popup__close-button');
    closePopupButton.addEventListener('click', () => {
      closePopup(popup);
  });
});

initialElements.forEach((item) => {
  elemetList.append(getElement(item));
});