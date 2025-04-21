import React, { useState } from "react";

const MovieCard = ({ title, url, release_date }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div>
      <div>
        <img src={url} alt={title} />
        <button onClick={toggleLike}>{liked ? "♥" : "♡"}</button>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
