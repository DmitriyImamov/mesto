const body = document.querySelector('.body');
const popupList = body.querySelectorAll('.popup');
const elemetList = body.querySelector('.elements__list');
const profileEditButton = body.querySelector('.profile__edit-button');
const profileInfoTitle = body.querySelector('.profile__info-title');
const profileInfoCurenetText = body.querySelector('.profile__info-curenet-text');
const profileAddButton = body.querySelector('.profile__add-button');
const popupPlaceProfile = body.querySelector('.popup_place_profile');
const profilePopupForm = popupPlaceProfile.querySelector('.popup__form');
const nameInput = profilePopupForm.querySelector('#popup__input-name');
const jobInput = profilePopupForm.querySelector('#popup__input-job');
const popupPlaceElement = body.querySelector('.popup_place_element');
const elementPopupForm = popupPlaceElement.querySelector('.popup__form');
const popupPlaceImage = body.querySelector('.popup_place_image');
const popupImage = popupPlaceImage.querySelector('.popup__image');
const popupImageDescription = popupPlaceImage.querySelector('.popup__image-description');
const titleInput = elementPopupForm.querySelector('#popup__input-title');
const linkInput = popupPlaceElement.querySelector('#popup__input-link');
const closeButtonPopupProfile = popupPlaceProfile.querySelector('.popup__close-button');
const closeButtonPopupElement = popupPlaceElement.querySelector('.popup__close-button');
const closeButtonPopupImage = popupPlaceImage.querySelector('.popup__close-button');

const getElement = (item) => {
  const elementTemplate = document.querySelector('#element-template').content.cloneNode(true);
  const element = elementTemplate.querySelector('.element');
  const likeButton = element.querySelector('.element__like-button');
  const removeButton = element.querySelector('.element__remove_button');
  const elementImage = element.querySelector('.element__image');

  elementImage.src = item.link;
  elementImage.alt = item.name;
  element.querySelector('.element__title').textContent = item.name;

  likeButton.addEventListener('click', () => {
    toggleLike(likeButton)
  });
  removeButton.addEventListener('click', () => {
    removeElement(element)
  });
  elementImage.addEventListener('click', () => {
    openPopupImage(item)
  });

  return element;
};

const openPopupImage = (item) => {
  popupImage.src = item.link;
  popupImage.setAttribute('alt', item.name);
  popupImageDescription.textContent = item.name;

  openPopup(popupPlaceImage);
};

const toggleLike = (likeButton) => {
  likeButton.classList.toggle('element__like-button_active');
};

const removeElement = (element) => {
  element.remove();
};

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');

  document.addEventListener('keydown', closeByEscape);
};

const closePopup = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (event) => {
  if (event.key === 'Escape') {
    const openModalWindow = document.querySelector('.popup_opened');
    closePopup(openModalWindow);
  }
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  profileInfoTitle.textContent = nameInput.value;
  profileInfoCurenetText.textContent = jobInput.value;

  closePopup(popupPlaceProfile);
};

const handleAddElement = (event) => {
  event.preventDefault();

  const element = getElement( {name: titleInput.value, link: linkInput.value} );
  const saveButton = popupPlaceElement.querySelector('.popup__save-button ');

  elemetList.prepend(element);
  elementPopupForm.reset();

  closePopup(popupPlaceElement);
  saveButton.setAttribute('disabled', '');
  saveButton.classList.add('popup__save-button_disabled');
};

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoCurenetText.textContent;

  openPopup(popupPlaceProfile);
});

profilePopupForm.addEventListener('submit',handleProfileFormSubmit);

profileAddButton.addEventListener('click', () => {
  openPopup(popupPlaceElement);
});

elementPopupForm.addEventListener('submit', handleAddElement);

popupList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

initialElements.forEach((item) => {
  elemetList.append(getElement(item));
});

closeButtonPopupProfile.addEventListener('click', () => {
  closePopup(popupPlaceProfile);
});

closeButtonPopupElement.addEventListener('click', () => {
  closePopup(popupPlaceElement)
});

closeButtonPopupImage.addEventListener('click', () => {
  closePopup(popupPlaceImage)
});