import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import MovieList from '../components/MovieList'; 

const FavoritesPage = () => {
  const { favorites } = useContext(MoviesContext); 

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} /> 
      ) : (
        <p>No favorites found.</p> 
      )}
    </div>
  );
};

export default FavoritesPage;
