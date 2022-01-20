import React, { useState} from 'react'
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from './pages/Home'
import Movie from './components/movies/Movie'
import MovieSingle from './components/movies/MovieSingle';
import Hola from './components/Hola'
import PiedraPapel from './pages/PiedraPapel';
function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies:idUrl" component={MovieSingle} />
          <Route path="/hola" component={Hola} />
          <Route path="/piedra" component={PiedraPapel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
