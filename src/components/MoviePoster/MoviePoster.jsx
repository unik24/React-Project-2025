import React from "react";
import { Link } from "react-router-dom";
import "./MoviePoster.css";

const MoviePoster = ({ url, title }) => {
  return (
    <div className="movie-poster">
      <Link to={`/movie/${title}`}>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
};

export default MoviePoster;
