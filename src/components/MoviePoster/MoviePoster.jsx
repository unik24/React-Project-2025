import React from "react";
import Button from "../Button";

const MoviePoster = ({ url, title, onLike, liked }) => {
  return (
    <div className="movie-poster">
      <img src={url} alt={title} />
      <div className="movie-overlay">
        <Button
          onClick={onLike}
          text={liked ? "♥" : "♡"} // Using 'text' prop as required
          className={`favorite-btn ${liked ? "active" : ""}`}
        />
      </div>
    </div>
  );
};

export default MoviePoster;
