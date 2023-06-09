function PopupWithForm (props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form action="#" onSubmit={props.onSubmit} method="POST" className={`form form_type_${props.name}`} name={`form-${props.name}"`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="form__submit button" aria-label={props.buttonTitle}>{props.buttonTitle}</button>
        </form>
      <button onClick={props.onClose}className="button button_type_close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  )
}

export default PopupWithForm