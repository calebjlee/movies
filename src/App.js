import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './screens/MovieDetails';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;