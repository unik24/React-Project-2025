import React from "react";
import styles from "./MoviePoster.module.css";

const MoviePoster = ({ url, title, onLike, liked }) => {
  return (
    <div className={styles.poster}>
      <img src={url} alt={title} />
      <div className={styles.overlay}>
        <button
          onClick={onLike}
          className={`${styles.favoriteBtn} ${liked ? styles.active : ""}`}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default MoviePoster;
