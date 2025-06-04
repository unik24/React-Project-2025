import React from "react";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { useMovieContext } from "../../context/MovieContext";
import { useAuth } from "../../context/AuthContext";

const MovieCard = ({ id, title, url }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const { user } = useAuth();

  const liked = isFavorite(id);

  const onLikeToggle = () => {
    if (!user) {
      return;
    }
    if (liked) {
      removeFromFavorites(id);
    } else {
      const poster_path = url.replace("https://image.tmdb.org/t/p/w500", "");
      addToFavorites({ id, title, poster_path });
    }
  };
  return (
    <div className={styles.card}>
      <Link to={`/movies/${id}`} className={styles.linkWrapper}>
        <MoviePoster
          url={url}
          title={title}
          liked={liked}
          onLike={onLikeToggle}
          isLoggedIn={!!user}
        />
        <MovieInfo title={title} />
      </Link>
    </div>
  );
};

export default MovieCard;