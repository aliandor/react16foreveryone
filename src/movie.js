import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie , score, desc }) => (
    <div>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <h6>average rating: {score}</h6>
      <p>{desc}</p>
    </div>  
  );

export default Movie;

  Movie.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }