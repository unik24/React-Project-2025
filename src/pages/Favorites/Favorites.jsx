import styles from "./Favorites.module.css";
import { useMovieContext } from "../../context/MovieContext";
import MovieCard from "../../components/MovieCard/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className={styles.favorites}>
        <h2>Your favorites</h2>
        <div className={styles.moviesGrid}>
          {favorites.map((movie, index) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              url={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.jpg"
              }
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favoritesEmpty}>
      <h2>No favorite movies yet!</h2>
      <p>Start exploring and add some movies to your favorites!</p>
    </div>
  );
}

export default Favorites;
