import React, { useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";

const sampleMoviePoster =
  "https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg";

const initialMovies = [
  {
    id: 1,
    title: "Movie Title 1",
    url: sampleMoviePoster,
    releaseDate: "2025-04-01",
    genre: "Action",
    rating: "8.5",
    duration: 120,
    description: "A thrilling action movie with an incredible storyline.",
    country: "USA",
    liked: false,
  },
  {
    id: 2,
    title: "Movie Title 2",
    url: sampleMoviePoster,
    releaseDate: "2025-03-15",
    genre: "Drama",
    rating: "7.3",
    duration: 110,
    description: "A heart-wrenching drama about family and love.",
    country: "UK",
    liked: false,
  },
  {
    id: 3,
    title: "Movie Title 3",
    url: sampleMoviePoster,
    releaseDate: "2025-02-10",
    genre: "Comedy",
    rating: "6.8",
    duration: 95,
    description: "A hilarious comedy that will make you laugh out loud.",
    country: "Canada",
    liked: false,
  },
  {
    id: 4,
    title: "Movie Title 4",
    url: sampleMoviePoster,
    releaseDate: "2025-02-10",
    genre: "Comedy",
    rating: "6.8",
    duration: 95,
    description: "A hilarious comedy that will make you laugh out loud.",
    country: "Canada",
    liked: false,
  },
  {
    id: 5,
    title: "Movie Title 5",
    url: sampleMoviePoster,
    releaseDate: "2025-02-10",
    genre: "Comedy",
    rating: "6.8",
    duration: 95,
    description: "A hilarious comedy that will make you laugh out loud.",
    country: "Canada",
    liked: false,
  },
];

const Homepage = () => {
  const [movies, setMovies] = useState(initialMovies);

  const handleLikeToggle = (movieId) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  return (
    <div className="homepage">
      <h2>Movie List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            url={movie.url}
            releaseDate={movie.releaseDate}
            genre={movie.genre}
            rating={movie.rating}
            duration={movie.duration}
            description={movie.description}
            country={movie.country}
            liked={movie.liked}
            onLikeToggle={() => handleLikeToggle(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
