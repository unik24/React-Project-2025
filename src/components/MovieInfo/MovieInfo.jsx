import React from "react";
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ title }) => {
  return (
    <div className={styles.info}>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieInfo;
