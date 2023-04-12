import React from 'react';
import '../index.css'
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''})
  }
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard)
  }

  return (
    <div className="page">
    <Header />
    <Main 
    onEditProfile = {handleEditProfileClick}
    onAddPlace = {handleAddPlaceClick}
    onEditAvatar = {handleEditAvatarClick}
    onCardClick = {handleCardClick}
    />
    <Footer />
    {/* popup edit profile */}
    <PopupWithForm
    name="profile"
    title="Редактировать профиль"
    buttonTitle="Сохранить"
    isOpen = {isEditProfilePopupOpen}
    onClose = {closeAllPopups}>
    <input type="text" className="form__input" name="profile-name" id="profile-name" required minLength="2" maxLength="40" />
    <span className="form__input-error" id="profile-name-error"></span>
    <input type="text" className="form__input" name="profile-job" id="profile-job" required minLength="2" maxLength="200" />
    <span className="form__input-error" id="profile-job-error"></span>
    </PopupWithForm>
    {/* popup add card */}
    <PopupWithForm
    name="cards"
    title="Новое место"
    buttonTitle="Создать"
    isOpen = {isAddPlacePopupOpen}
    onClose = {closeAllPopups}>
    <input type="text" className="form__input" name="card-name" id="card-name" placeholder="Название" required minLength="2" maxLength="30" />
    <span className="form__input-error" id="card-name-error"></span>
    <input type="url" className="form__input" name="card-link" id="card-link" placeholder="Ссылка на картинку" required />
    <span className="form__input-error" id="card-link-error"></span>
    </PopupWithForm>
    {/* popup edit avatar */}
    <PopupWithForm
    name="avatar"
    title="Обновить аватар"
    buttonTitle="Создать"
    isOpen = {isEditAvatarPopupOpen}
    onClose = {closeAllPopups}>
    <input type="url" className="form__input" name="avatar-link" id="avatar-link" placeholder="Ссылка на картинку" required />
    <span className="form__input-error" id="avatar-link-error"></span>
    </PopupWithForm>    
    {/* confirmation popup */}
    <PopupWithForm
    name="confirmation"
    title="Вы уверены"
    buttonTitle="Да" />
    <ImagePopup 
    card={selectedCard}
    onClose={closeAllPopups}
    />


</div>
  );
}

export default App;
