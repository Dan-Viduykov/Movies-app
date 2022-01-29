import React from 'react';
import './FilmCard.css';

export default function FilmCard() {
  return (
    <div className="film-card">
      <div className="film-card__image">
        <img src="https://clrphotos.com/wp-content/uploads/2019/02/placeholder_image1-9.png" alt="film name poster" />
      </div>
      <div className="film-card__content">
        <h5 className="film-card__title">Film Name</h5>
        <p className="film-card__date">03.03.2000</p>
        <ul className="film-card__genres">
          <li>Action</li>
          <li>Drama</li>
        </ul>
        <p className="film-card__overview">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
    </div>
  );
}
