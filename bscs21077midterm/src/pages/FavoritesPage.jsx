import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import MovieList from '../components/MovieList';

const FavoritesPage = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? <MovieList movies={favorites} /> : <p>No favorites yet.</p>}
    </div>
  );
};

export default FavoritesPage;
