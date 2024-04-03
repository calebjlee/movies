import React, { useState } from 'react';
import '../Styles.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    //Reset the search bar after user submits
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        className='search-input'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;