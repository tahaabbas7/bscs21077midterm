import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../context/MoviesContext';

const MovieItem = ({ movie }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(MoviesContext);
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.imdbID}`}>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
          alt={movie.Title} 
        />
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
      </Link>
      <button onClick={() => (isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieItem;
