import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { MoviesProvider } from './context/MoviesContext';  // Import the provider

const App = () => {
  return (
    <MoviesProvider>  {/* Provide global state management for favorites */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <Footer />
      </Router>
    </MoviesProvider>
  );
};

export default App;
