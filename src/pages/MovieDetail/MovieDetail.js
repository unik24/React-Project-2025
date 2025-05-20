import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieTrailer } from "../../services/api";
import styles from "./MovieDetail.module.css";
import CommentSection from "../../components/Comment/Comment";

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
      <div
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(to right, 
  rgba(0, 0, 0, 0.8) 30%, 
  rgba(255, 255, 255, 0.3) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.contentWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <div className={styles.heroItems}>
            <div className={styles.details}>
              <h1>{movie.title}</h1>
              <p>⭐ {movie.vote_average.toFixed(1)}</p>
              <p>
                {movie.production_countries?.[0]?.name ||
                  "Country not specified"}
              </p>
              <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
              <p> {new Date(movie.release_date).getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.information}>
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
        <div>
          <p>Description: {movie.overview}</p>

          <p>Runtime: {movie.runtime} minutes</p>
          {/* <p>Tagline: "{movie.tagline}"</p> */}
          <p>Status: {movie.status}</p>
          <p>Language: {movie.original_language.toUpperCase()}</p>
          <p>Budget: ${movie.budget.toLocaleString()}</p>
          {/* <p>Revenue: ${movie.revenue.toLocaleString()}</p> */}
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default MovieDetail;
