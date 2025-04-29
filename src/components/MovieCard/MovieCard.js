import React from "react";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import "./MovieCard.css";

const MovieCard = ({
  title,
  url,
  releaseDate,
  genre,
  rating,
  duration,
  description,
  country,
  liked,
  onLikeToggle,
}) => {
  return (
    <div className="movie-card">
      <MoviePoster
        url={url}
        title={title}
        liked={liked}
        onLike={onLikeToggle}
      />
      <MovieInfo
        title={title}
        releaseDate={releaseDate}
        genre={genre}
        rating={rating}
        duration={duration}
        description={description}
        country={country}
      />
    </div>
  );
};

export default MovieCard;
