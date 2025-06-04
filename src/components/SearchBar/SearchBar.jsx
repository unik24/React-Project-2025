import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../Input/Input";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
import { searchMovies } from "../../services/api";
import { useHomeReset } from "../../context/HomeResetContext";
import styles from "./SearchBar.module.css";

function SearchBar({ onResults, onSearchTriggered }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { resetKey, startSearch, endSearch } = useHomeReset();

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;

    startSearch();
    setLoading(true);
    try {
      const results = await searchMovies(query);
      onResults(results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching search results.");
    } finally {
      setLoading(false);
      endSearch();
    }
  }, [query, onResults, startSearch, endSearch]);

  useEffect(() => {
    if (query.trim().length > 3) {
      handleSearch();
    }
  }, [query, handleSearch]);

  useEffect(() => {
    setQuery("");
    setError(null);
  }, [resetKey]);

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputButtonWrapper}>
        <Input
          icon={<SearchIcon />}
          type="search"
          placeholder="Search for movies"
          value={query}
          onChange={(val) => setQuery(val)}
          debounce={500}
          className={styles.searchBarInputModified}
        />
        <Button
          onClick={handleSearch}
          buttonType="primary"
          buttonSize="medium"
          className={styles.searchButtonModified}
          disabled={loading}
        >
          Search
        </Button>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

export default SearchBar;
