import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useHomeReset } from "../../../context/HomeResetContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { triggerReset } = useHomeReset();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      triggerReset();
    } else {
      navigate("/");
    }
  };
  return (
    <nav className={styles.nav}>
      <a href="/" onClick={handleHomeClick} className={styles.logoLink}>
        Movie Diary
      </a>
      <div className={styles.links}>
        <a href="/" onClick={handleHomeClick} className={styles.link}>
          Home
        </a>
        <Link to="/profile" className={styles.link}>
          Profile
        </Link>
        <Link to="/favorites" className={styles.link}>
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
