import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import Movie from './movie';

class App extends Component {
  
  state = {
    movies: []
  }
  
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=99c68f3a8900fcbbf64ecd9c78b8ea3d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      
      this.setState({
        movies: movies.results
      })
      
    }  catch(e) {
      console.log(e);
    } 
  }
  
  render() {
    console.log(this.state.movies);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test/" component={Test} />
          {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} score={movie.vote_average} votes={movie.vote_count} desc={movie.overview}/>))}
        </div>
      </Router>
    );
  }
}

export default App;
 const Test = () => (
   <h1>TEST</h1>
   )