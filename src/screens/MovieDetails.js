import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { APIKEY } from '../components/secret';
import '../Styles.css';


//Replace APIKEY with: 'http://www.omdbapi.com/?apikey=4dd7e4b0'
const url = APIKEY;

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${url}&i=${id}&plot=full`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div>
      <p className='back-button' onClick={handleClick}>{'>'}</p>
      <div className='container'>
        <h1 className='title'>{movie.Title}</h1>
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Plot: {movie.Plot}</p>
      </div>
      
    </div>
  );
}

export default MovieDetails;