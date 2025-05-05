import React from "react";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ title, url, liked, onLikeToggle }) => {
  return (
    <div className={styles.card}>
      <Link to={`/movies/${title}`} className={styles.linkWrapper}>
        <MoviePoster
          url={url}
          title={title}
          liked={liked}
          onLike={onLikeToggle}
        />
        <MovieInfo title={title} />
      </Link>
    </div>
  );
};

export default MovieCard;
