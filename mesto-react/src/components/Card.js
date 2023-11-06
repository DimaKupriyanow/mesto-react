import React from "react";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card)
  }
  return (
      <div className="element">
          <img
          className="element__image  element__image_add"
          src={card.link}
          onClick={handleClick}
        ></img>
        <h3 className="element__title">{card.name}</h3>
        <button
          name="elementIconLike"
          type="button"
          className="element__icon"
        ></button>
        <div name="elementLikes" className="element__likes">
          {card.likes}
        </div>
        <button type="button" className="element__delete"></button>
      </div>
    
  ); 
}

export default Card;
