import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies, fetchMoviesByGenre } from "../../services/api";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useHomeReset } from "../../context/HomeResetContext";
import styles from "./Home.module.css";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resetKey } = useHomeReset();
  const location = useLocation();

  const loadMovies = async (genreId = null) => {
    setLoading(true);
    try {
      let data;
      if (genreId) {
        data = await fetchMoviesByGenre(genreId, 1);
      } else {
        data = await fetchMovies(1);
      }

      setMovies(
        data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          url: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Poster",
          liked: false,
          rating: movie.vote_average,
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genreId = queryParams.get("genre");

    loadMovies(genreId);
  }, [resetKey, location.search]);

  const handleLikeToggle = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  if (loading) return <div className={styles.loading}>Loading movies...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.homepage}>
      <SearchBar key={resetKey} onResults={setMovies} />
      <div className={styles.movieList}>
        {movies.length > 0 ? (
          movies.map(({ id, title, url, liked }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              url={url}
              liked={liked}
              onLikeToggle={() => handleLikeToggle(id)}
            />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
