import React, { useState } from "react";
import Button from "./Button";

const MovieCard = ({ title, url, release_date }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div>
      <div>
        <img src={url} alt={title} />
        <Button onClick={toggleLike} text={liked ? "♥" : "♡"} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
