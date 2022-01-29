import React from 'react';
import FilmCard from '../FilmCard';
import './FilmsList.css';

export default function FilmsList() {
  return (
    <ul className="films-list">
      <li className="films-list__item">
        <FilmCard />
      </li>
      <li className="films-list__item">
        <FilmCard />
      </li>
      <li className="films-list__item">
        <FilmCard />
      </li>
      <li className="films-list__item">
        <FilmCard />
      </li>
      <li className="films-list__item">
        <FilmCard />
      </li>
      <li className="films-list__item">
        <FilmCard />
      </li>
    </ul>
  );
}
