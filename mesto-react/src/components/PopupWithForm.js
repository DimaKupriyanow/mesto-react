import React from "react";

function PopupWithForm({name, title, children, submit, isOpen, onClose}) {
    const className = `${isOpen ? 'popup_opened' : '' }`;
return (
  <>
    <div className={`popup popup_type_${name} ${className}`}>
      <form name={name} noValidate className="form popup__container">
        <button type="reset" className="popup__close" onClick={onClose}></button>
        <h3 className="popup__title">{title}</h3>
        {children}
        <button
          id="buttonInputInfo"
          type="submit"
          className="popup__button-submit popup__button-submit_info"
        >{submit}</button>
      </form>
    </div>
  </>
);
}
export default PopupWithForm;

