import React from 'react';
import { Pagination } from 'antd';
import './App.css';

import FilmsList from '../FilmsList';

export default function App() {
  return (
    <div className="app">
      <FilmsList />
      <Pagination className="app__pagination" />
    </div>
  );
}
