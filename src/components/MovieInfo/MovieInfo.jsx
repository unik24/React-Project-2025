import React from "react";

const MovieInfo = ({
  title,
  showDetails,
  releaseDate,
  genre,
  rating,
  duration,
  description,
  country,
}) => {
  return (
    <div className="movie-info">
      <h3>{title}</h3>

      {showDetails && (
        <>
          <p className="info-item">
            <span className="bold">Release Date:</span> {releaseDate}
          </p>
          <p className="info-item">
            <span className="bold">Genre:</span> {genre}
          </p>
        </>
      )}
    </div>
  );
};

MovieInfo.defaultProps = {
  showDetails: false,
};

export default MovieInfo;
