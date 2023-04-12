import React from "react"
import api from "../utils/api"
import Card from "./Card"

function Main (props) {
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

// initial info
  React.useEffect(()=> {
    api.getUserInfo()
   .then(data => {
    setUserName(data.name)
    setUserDescription(data.about)
    setUserAvatar(data.avatar)
   })
   .catch(err => console.log(err))

   api.getInitialCards()
   .then(data => {
    setCards(data)
   })
   .catch(err => console.log(err))

}, [])


  return (
    <main className="container">
      <section className="profile">
        <div className="profile__photo">
          <img 
          src={userAvatar} 
          alt="Фотография пользователя" 
          style={{ backgroundImage: `url(${userAvatar})` }} 
          className="profile__avatar"/>
          <button 
            onClick={props.onEditAvatar}  
            className="button profile__avatar-button">
          </button>
        </div>
        <div className="profile__content">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__info">{userDescription}</p>
          <button
            onClick={props.onEditProfile} 
            className="button button_type_edit"
            type="button"
            aria-label="Редактировать">
          </button>
        </div>
        <button
          onClick={props.onAddPlace}
          className="button button_type_add"
          type="button"
          aria-label="Добавить">
        </button>
      </section>
      <section className="cards">
        <ul className="places">
          {cards.map(card => (
            <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main