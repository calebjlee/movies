import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
