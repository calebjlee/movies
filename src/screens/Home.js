import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard.js';
import '../Styles.css';
import { APIKEY } from '../components/secret.js';

//Replace APIKEY with: 'http://www.omdbapi.com/?apikey=4dd7e4b0'
const url = APIKEY;

function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async (query, page = 1) => {
    setSearch(query);
    try {
      const response = await fetch(`${url}&s=${query}&page=${page}`);
      const data = await response.json();

      if (data.Response === "True") {
        setResults(data.Search);
        setPage(page);
        console.log("Successful search");
      } else {
        setResults(null);
        console.error('Movie not found:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults(null);
    }
  };

  const handlePageChange = (direction) => {
    const newPage = page + direction;
    //prevent going below page 1
    if (newPage < 1) return;
    setPage(newPage);
    handleSearch(search, newPage);
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1 className='title'>Movie Search</h1>
        <SearchBar onSearch={(query) => handleSearch(query, 1)}/>
      </div>
      <div className='movies-container'>
        <div className='list-container'>
          {results && (
              <ul>
                {results.map((movie) => (
                  <MovieCard className='movie-card' key={movie.imdbID} movie={movie} />
                ))}
              </ul>
          )}
        </div>
        <div className="page-container">
          <button className='page-button' onClick={() => handlePageChange(-1)}>Previous</button>
          <span className='page-text'>Page {page}</span>
          <button className='page-button' onClick={() => handlePageChange(1)}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;