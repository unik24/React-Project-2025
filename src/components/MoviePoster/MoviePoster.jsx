import React from "react";
import styles from "./MoviePoster.module.css";

const MoviePoster = ({ url, title, onLike, liked, isLoggedIn }) => {
  return (
    <div className={styles.poster}>
      <img src={url} alt={title} />
      <div className={styles.overlay}>
        {isLoggedIn && (
          <button
            onClick={(e) => {
              e.preventDefault();

              onLike();
            }}
            className={`${styles.favoriteBtn} ${liked ? styles.active : ""}`}
          >
            {liked ? "♥" : "♡"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MoviePoster;
