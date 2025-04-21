import React, { useState } from "react";
import Button from "./Button";

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
    <div>
      <div>
        <img src={url} alt={title} />
        <Button onClick={toggleLike} text={liked ? "♥" : "♡"} />
      </div>
      <div>
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
