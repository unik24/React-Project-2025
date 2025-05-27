import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useHomeReset } from "../../../context/HomeResetContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <a href="/" onClick={handleHomeClick} className={styles.logoLink}>
        Movie Diary
      </a>
      {/* Hamburger button */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
      </button>
      <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <a href="/" onClick={handleHomeClick} className={styles.link}>
          Home
        </a>
        <Link
          to="/profile"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Profile
        </Link>
        <Link
          to="/favorites"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
