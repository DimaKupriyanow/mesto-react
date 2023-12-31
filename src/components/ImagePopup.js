import React from "react";

function ImagePopup({ card, onClose }) {
    const className = `${card ? 'popup_opened' : '' }`;
    return (
      <div className={`popup popup_type_more-image ${className}`}>
        <div className="popup__container-image">
          <img src={card?.link} className="image" alt={card?.name} />
            <button type="reset" className="popup__close" onClick={onClose}>
            </button>
          <p className="popup__title-image">{card?.name}</p>
        </div>
      </div>
    );
}
export default ImagePopup;
