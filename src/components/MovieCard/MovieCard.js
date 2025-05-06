import React from "react";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, url, liked, onLikeToggle }) => {
  return (
    <div className={styles.card}>
      <MoviePoster
        url={url}
        title={title}
        liked={liked}
        onLike={onLikeToggle}
      />
      <MovieInfo title={title} />
    </div>
  );
};

export default MovieCard;
