import './App.css';
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import { Home } from './components/home/Home';
import { MovieDetail } from './components/movie/MovieDetail';


function App() {
  return (
    <Routes>
      <Route exact path="/" component= {Home} exact />
      <Route path="/movie/:id" component= {MovieDetail} exact />
    </Routes>
  );
}

export default App;
