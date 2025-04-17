import React, { useState } from "react";

const MovieCard = ({ title, url, release_date }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} className="movie-poster" />
        <button
          className="favorite-btn"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
