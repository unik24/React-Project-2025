import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useHomeReset } from "../../../context/HomeResetContext";
import { useAuth } from "../../../context/AuthContext";
import { fetchGenres } from "../../../services/api";
import Dropdown from "../../Dropdown/Dropdown";
import { UserIcon } from "../../Icons/UserIcon/UserIcon";
import { DownArrowIcon } from "../../Icons/DownArrowIcon/DownArrowIcon";
import { LogOut } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { triggerReset, resetKey, isSearching, hasSearched, clearHasSearched } =
    useHomeReset();
  const { user, logout } = useAuth();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showGenresDropdown, setShowGenresDropdown] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Genres");

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error loading genres:", error);
      }
    };
    loadGenres();
  }, []);

  useEffect(() => {
    if (isSearching || hasSearched) {
      setSelectedGenreName("Genres");
    } else {
      const queryParams = new URLSearchParams(location.search);
      const genreIdFromUrl = queryParams.get("genre");

      if (genreIdFromUrl && genres.length > 0) {
        const genre = genres.find((g) => g.id === parseInt(genreIdFromUrl));
        if (genre) {
          setSelectedGenreName(genre.name);
        } else {
          setSelectedGenreName("Genres");
        }
      } else {
        setSelectedGenreName("Genres");
      }
    }

    setShowGenresDropdown(false);
    setShowUserMenu(false);
    setMenuOpen(false);
  }, [location.search, genres, resetKey, isSearching, hasSearched]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setShowGenresDropdown(false);
    setShowUserMenu(false);
    setMenuOpen(false);
    triggerReset();
  };

  const handleGenreSelect = (genreId) => {
    navigate(`/?genre=${genreId}`);
    clearHasSearched();
    setShowGenresDropdown(false);
     setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
     setMenuOpen(false);
    navigate("/");
  };

  const renderProfileImage = () => {
    if (user?.profile?.profilePicture?.startsWith("http")) {
      return (
        <img
          src={user.profile.profilePicture}
          alt="Profile Pic"
          className={styles.profileImage}
        />
      );
    }
    return (
      <div className={styles.profileButtonIconContainer}>
        <UserIcon size={35} color="#007bff" />
      </div>
    );
  };

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setShowGenresDropdown(false); 
    setShowUserMenu(false);
  };
  return (
    <nav className={styles.nav}>
      <NavLink to="/" onClick={handleHomeClick} className={styles.logoLink}>
        Movie Diary
      </NavLink>
 
      <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
      </button>


      <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <NavLink to="/" onClick={handleHomeClick} end className={getNavLinkClass}>
          Home
        </NavLink>

        <Dropdown
          buttonContent={
            <>
              {selectedGenreName} <DownArrowIcon />
            </>
          }
          isOpen={showGenresDropdown}
          onToggle={setShowGenresDropdown}
          position="left"
        >
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={styles.dropdownItem}
              onClick={() => handleGenreSelect(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </Dropdown>

        {user && (
          <NavLink
            to="/favorites"
            end
            className={getNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </NavLink>
        )}

        {!user ? (
          <NavLink
            to="/login"
            end
            className={getNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        ) : (
          <Dropdown
            buttonContent={
              <>
                {renderProfileImage()}
                <span className={styles.usernameText}>{user.username}</span>{" "}
                <span
                  className={`${styles.dropdownArrow} ${
                    showUserMenu ? styles.dropdownArrowOpen : ""
                  }`}
                >
                  <DownArrowIcon />
                </span>
              </>
            }
            isOpen={showUserMenu}
            onToggle={setShowUserMenu}
            position="right"
          >
            <NavLink
              to="/profile"
              className={styles.dropdownItem}
              onClick={() => {
                setShowUserMenu(false);
                setMenuOpen(false);
              }}
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className={styles.dropdownItem}
            >
              <LogOut size={18} /> Logout
            </button>
          </Dropdown>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
