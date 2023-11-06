import React from "react";
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, data, cards, onCardClick  }) {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__profile-avatar" onClick={onEditAvatar}>
            <img
              alt="Кусто"
              src={data.userAvatar}
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{data.userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__button-change"
            ></button>
            <p className="profile__subtitle">{data.userDescription}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            className="profile__button-add"
          ></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card.id} card={card} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
      </>
    );
}
export default Main;

