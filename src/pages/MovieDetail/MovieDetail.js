import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieTrailer } from "../../services/api";
import styles from "./MovieDetail.module.css";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);

        const key = await fetchMovieTrailer(movieId);
        setTrailerKey(key);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!movie) return <div className={styles.error}>Movie not found</div>;

  return (
    <div className={styles.blackbg}>
      <div className={styles.hero}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1>{movie.title}</h1>
          <p>⭐ {movie.vote_average.toFixed(1)}</p>
          <p>
            {" "}
            {movie.production_countries?.[0]?.name || "Country not specified"}
          </p>
          <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
        </div>
      </div>
      <div className={styles.information}>
        <div>
          <p>Description: {movie.overview}</p>
          <p>Release date: {new Date(movie.release_date).getFullYear()}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Tagline: "{movie.tagline}"</p>
          <p>Status: {movie.status}</p>
          <p>Language: {movie.original_language.toUpperCase()}</p>
          <p>Budget: ${movie.budget.toLocaleString()}</p>
          <p>Revenue: ${movie.revenue.toLocaleString()}</p>
        </div>
        {trailerKey && (
          <div className={styles.trailer}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className={styles.information}>
        <label>Comment</label>
        <input></input>
      </div>
    </div>
  );
};

export default MovieDetail;
