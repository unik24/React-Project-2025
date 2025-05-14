import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../services/api";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies(1);
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

    loadMovies();
  }, []);

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
      <SearchBar onResults={setMovies} />
      <div className={styles.movieList}>
        {movies.map(({ id, title, url, liked }) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            url={url}
            liked={liked}
            onLikeToggle={() => handleLikeToggle(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
