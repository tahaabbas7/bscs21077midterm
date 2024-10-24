import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  return (
    <GlobalContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
