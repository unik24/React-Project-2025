import React from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";
const sampleMoviePoster =
  "https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg?t=st=1745402755~exp=1745406355~hmac=67b90c20a4f4084ecb26242fb3b804420953f51f07752f9519b84cdb2339f93a&w=740";
const movies = [
  {
    id: 1,
    title: "Movie Title 1",
    url: sampleMoviePoster,
    release_date: "2025-04-01",
    genre: "Action",
    rating: "8.5",
    duration: 120,
    description: "A thrilling action movie with an incredible storyline.",
    country: "USA",
  },
  {
    id: 2,
    title: "Movie Title 2",
    url: sampleMoviePoster,
    release_date: "2025-03-15",
    genre: "Drama",
    rating: "7.3",
    duration: 110,
    description: "A heart-wrenching drama about family and love.",
    country: "UK",
  },
  {
    id: 3,
    title: "Movie Title 3",
    url: sampleMoviePoster,
    release_date: "2025-02-10",
    genre: "Comedy",
    rating: "6.8",
    duration: 95,
    description: "A hilarious comedy that will make you laugh out loud.",
    country: "Canada",
  },
  {
    id: 4,
    title: "Movie Title 4",
    url: sampleMoviePoster,
    release_date: "2025-02-10",
    genre: "Comedy",
    rating: "6.8",
    duration: 95,
    description: "A hilarious comedy that will make you laugh out loud.",
    country: "Canada",
  },
];

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>Movie List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            url={movie.url}
            release_date={movie.release_date}
            genre={movie.genre}
            rating={movie.rating}
            duration={movie.duration}
            description={movie.description}
            country={movie.country}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
