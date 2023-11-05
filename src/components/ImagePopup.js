import React from "react";

function ImagePopup({ card, onClose }) {
    const {name, link} = card;
    const className = `${name ? 'popup_opened' : '' }`;
    return (
      <div className={`popup popup_type_more-image ${className}`}>
        <div className="popup__container-image">
          <img src={link} className="image" alt={name} />
            <button type="reset" className="popup__close" onClick={onClose}>
            </button>
          <p className="popup__title-image">{name}</p>
        </div>
      </div>
    );
}
export default ImagePopup;
