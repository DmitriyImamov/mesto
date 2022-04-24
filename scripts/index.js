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
const elemetList = body.querySelector('.elements__list');
const profileEditButton = body.querySelector('.profile__edit-button');
const profileInfoTitle = body.querySelector('.profile__info-title');
const profileInfoCurenetText = body.querySelector('.profile__info-curenet-text');
const profileAddButton = body.querySelector('.profile__add-button');

const popupPlaceProfile = body.querySelector('.popup_place_profile');
const profilePopupForm = popupPlaceProfile.querySelector('.popup__form');
const closeButtonPopupProfile = popupPlaceProfile.querySelector('.popup__close-button');
const nameInput = profilePopupForm.querySelector('.popup__input-text_type_name');
const jobInput = profilePopupForm.querySelector('.popup__input-text_type_job');

const popupPlaceElement = body.querySelector('.popup_place_element');
const elementPopupForm = popupPlaceElement.querySelector('.popup__form');
const closeButtonPopupElement = popupPlaceElement.querySelector('.popup__close-button');
// функция добавления карточек из массива
function getElement(arrElements) {
  arrElements.forEach(function(item) {
    const elementTemplate = document.querySelector('#element-template').content.cloneNode(true);

    elementTemplate.querySelector('.element__image').src = item.link;
    elementTemplate.querySelector('.element__title').textContent = item.name;

    elemetList.append(elementTemplate);
  });
}

// функция открытия попапа
function openPopup(modalWindow) {
  modalWindow.classList.add('popup_opened');
}
// фйнкция закрытия попапа
function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}
// функция редактированя профиля
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileInfoTitle.textContent = nameInput.value;
  profileInfoCurenetText.textContent = jobInput.value;

  closePopup(popupPlaceProfile);
}

// функция добавления карточки
function handleAddElement(evt) {
  evt.preventDefault();

  const titleInput = elementPopupForm.querySelector('.popup__input-text_type_title').value;
  const linkInput = popupPlaceElement.querySelector('.popup__input-text_type_link').value;
  const element = getElement([{name: titleInput, link: linkInput}]);

  elemetList.prepend(element);

  closePopup(popupPlaceElement);
}

// слушатель открытия формы профиля
profileEditButton.addEventListener('click',
  function() {
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoCurenetText.textContent;

    openPopup(popupPlaceProfile);
});

// слушатель закрытия формы профиля
closeButtonPopupProfile.addEventListener('click',
  function() {
    closePopup(popupPlaceProfile);
});

// слушатель отправки формы профиля
profilePopupForm.addEventListener('submit', formSubmitHandler);

// слушатель открытия формы карточек
profileAddButton.addEventListener('click',
  function() {
    openPopup(popupPlaceElement);
});

// слушатель отправки формы карточек
elementPopupForm.addEventListener('submit', handleAddElement);

// слушатель закрытия формы карточек
closeButtonPopupElement.addEventListener('click',
  function() {
    closePopup(popupPlaceElement);
});

// авзов функции заполнения карточек
getElement(initialElements);