import React, { useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import styles from "./Home.module.css";

const sampleMoviePoster =
  "https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg";

const initialMovies = [
  { id: 1, title: "Movie Title 1", url: sampleMoviePoster, liked: false },
  { id: 2, title: "Movie Title 2", url: sampleMoviePoster, liked: false },
  { id: 3, title: "Movie Title 3", url: sampleMoviePoster, liked: false },
  { id: 4, title: "Movie Title 4", url: sampleMoviePoster, liked: false },
  { id: 5, title: "Movie Title 5", url: sampleMoviePoster, liked: false },
];

const Homepage = () => {
  const [movies, setMovies] = useState(initialMovies);

  const handleLikeToggle = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  return (
    <div className={styles.homepage}>
      <h2>Movie List</h2>
      <div className={styles.movieList}>
        {movies.map(({ id, title, url, liked }) => (
          <MovieCard
            key={id}
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
