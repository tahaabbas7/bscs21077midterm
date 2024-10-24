import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=70615a1e&i=${id}`);
        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (error) {
        setError('Failed to load movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>Release Date: {movie.Released}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
