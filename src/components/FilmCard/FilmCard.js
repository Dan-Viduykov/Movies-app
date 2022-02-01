import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Rate } from 'antd';
import './FilmCard.css';

export default function FilmCard({ data }) {
  const { title, release_date: releaseDate, overview, poster_path: posterPath, vote_average: average } = data;

  const date = format(new Date(releaseDate), 'MMMM i, y');

  function minify(text, length) {
    return `${text.slice(0, text.indexOf(' ', length))} ...`;
  }

  return (
    <div className="film-card">
      <div className="film-card__image">
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title} poster`} />
      </div>
      <div className="film-card__content">
        <h5 className="film-card__title">{title}</h5>
        <p className="film-card__date">{date}</p>
        <ul className="film-card__genres">
          <li>Action</li>
          <li>Drama</li>
        </ul>
        <p className="film-card__overview">{minify(overview, 100)}</p>
        <div className="film-card__average">
          <p>{average}</p>
        </div>
        <Rate className="film-card__rate" />
      </div>
    </div>
  );
}

FilmCard.defaultProps = {
  data: {
    title: 'no title',
    release_date: 'no date',
    overview: 'no description',
    poster_path:
      'https://yandex.ru/images/search?from=tabbar&text=placeholder&pos=0&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCpXpQ22WAAAzv-Y.jpg&rpt=simage',
    vote_average: '0.0',
  },
};

FilmCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
