import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logoLink}>
        Movie Diary
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/profile" className={styles.link}>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
