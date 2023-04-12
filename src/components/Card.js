function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="place">
        <img 
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name} 
        className="place__image"/>
        <button className="button place__delete" type="button" aria-label="Удалить"></button>
        <div className="place__content">
          <h2 className="place__name">{props.card.name}</h2>
          <div className="place__like-container">
            <button className="button place__like" type="button" aria-label="Нравится"></button>
            <span className="place__like-counter">{props.card.likes.length}</span>
          </div>
        </div>
      </li>
  )
}

export default Card;