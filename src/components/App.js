import '../index.css';
import './App.js';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React, { useEffect, useState } from 'react';
import { newApi } from '../utils/api.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [cards, setCards] = useState([]); 
  useEffect(() => {
    newApi
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    newApi
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  return (
    <div>
      <Header />
      <Main
        cards={cards}
        onCardClick={handleCardClick}
        data={{ userName, userDescription, userAvatar }}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="more-info"
        title="Редактировать профиль"
        submit="Сохранить"
      >
        <input
          required
          minLength="2"
          maxLength="40"
          name="inputName"
          id="formName"
          className="form__input popup__input-name popup__input-name_info"
          placeholder="Жак-Ив Кусто"
        />
        <span
          id="error-formName"
          className="form-name-error form__input-error"
        ></span>
        <input
          id="formClass"
          required
          minLength="2"
          name="inputInfo"
          maxLength="200"
          placeholder="Название"
          className="form__input popup__input-name popup__input-name_more_heading"
        />
        <span
          id="error-formClass"
          className="form-class-error form__input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name="more-item"
        title="Новое место"
        submit="Создать"
      >
        <input
          required
          minLength="2"
          maxLength="30"
          name="inputNameCard"
          id="nameImage"
          placeholder="Название"
          className="form__input popup__input-name popup__input-name_item"
        />
        <span
          id="error-nameImage"
          className="form-item-error form__input-error"
        ></span>
        <input
          required
          id="formLink"
          type="url"
          name="inputLink"
          placeholder="Ссылка на картинку"
          className="form__input popup__input-name popup__input-name_more_link"
        />
        <span
          id="error-formLink"
          className="form-link-error form__input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="profile-avatar"
        title="Обновить аватар"
        close="popup__close"
        submit="Сохранить"
      >
        <input
          required
          id="formLinkAvatar"
          type="url"
          name="inputLinkAvatar"
          placeholder="Ссылка на аватар"
          className="form__input popup__input-name"
        />
        <span
          id="error-formLinkAvatar"
          className="form-link-error form__input-error"
        ></span>
      </PopupWithForm>
      <Footer />
    </div>
  );
}
export default App;
