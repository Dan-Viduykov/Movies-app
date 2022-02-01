/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import FilmCard from '../FilmCard';
import MoviesService from '../../services/MoviesService';
import './FilmsList.css';

export default class FilmsList extends Component {
  moviesService = new MoviesService();

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.moviesService
      .searchMovies()
      .then((response) => response.results)
      .then(this.createList)
      .catch(this.onError);
  }

  createList = (data) => {
    const filmsList = data.map((film) => this.createCard(film));

    this.setState({
      films: filmsList,
      loading: false,
    });
  };

  onError = (err) => {
    // eslint-disable-next-line no-console
    console.log(err);

    this.setState({
      loading: false,
      error: true,
    });
  };

  createCard(film) {
    const { id, ...data } = film;

    return (
      <li className="films-list__item" key={id}>
        <FilmCard data={data} />
      </li>
    );
  }

  render() {
    const { films, loading, error } = this.state;

    const hasDate = !(loading || error);

    // eslint-disable-next-line no-alert
    const errorMessage = error ? (
      <Alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
    ) : null;

    const spinner = loading ? <Spin className="spinner" size="large" /> : null;
    const content = hasDate ? <ul className="films-list">{films}</ul> : null;

    return (
      <div className="wrap">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
