/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FilmCard from '../FilmCard';
import MoviesService from '../../services/MoviesService';
import './FilmsList.css';

export default class FilmsList extends Component {
  moviesService = new MoviesService();

  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    this.moviesService
      .searchMovies()
      .then((response) => response.results)
      .then((data) => {
        const filmsList = data.map((film) => this.createCard(film));

        this.setState({
          films: filmsList,
        });
      });
  }

  createCard(film) {
    const { id, ...data } = film;

    return (
      <li className="films-list__item" key={id}>
        <FilmCard data={data} />
      </li>
    );
  }

  render() {
    const { films } = this.state;

    return <ul className="films-list">{films}</ul>;
  }
}
