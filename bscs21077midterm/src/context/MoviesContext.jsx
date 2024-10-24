// src/context/MoviesContext.js
import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.imdbID !== id));
  };

  return (
    <MoviesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </MoviesContext.Provider>
  );
};
