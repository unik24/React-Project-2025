import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input/Input";
import SearchIcon from "../SearchIcon/SearchIcon";
import styles from "./SearchBar.module.css";
import { searchMovies } from "../../services/api";

function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
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
    }
  }, [query, onResults]);

  useEffect(() => {
    if (query.trim().length > 3) {
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
    <div className={styles.searchBarContainer}>
      <Input
        icon={<SearchIcon />}
        type="search"
        placeholder="Search for movies"
        value={query}
        onChange={(val) => setQuery(val)}
        debounce={500}
      />

      <Button
        onClick={handleSearch}
        className={styles.searchButton}
        disabled={loading}
      >
        Search
      </Button>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default SearchBar;
