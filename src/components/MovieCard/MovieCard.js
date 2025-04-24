import React, { useState } from "react";
import Button from "./Button";
import "./MovieCard.css";

const MovieCard = ({
  title,
  url,
  release_date,
  genre,
  rating,
  duration,
  description,
  country,
}) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <Button
            onClick={toggleLike}
            text={liked ? "♥" : "♡"}
            className={`favorite-btn ${liked ? "active" : ""}`}
          />
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>
          <strong>Release Date:</strong> {release_date}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Duration:</strong> {duration} minutes
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
