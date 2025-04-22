import React from "react";
import Button from "./Button";

function SearchBar({ handleSearch, searchQuery, onSearchInputChange }) {
  const handleChange = (e) => {
    onSearchInputChange(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        className="search-input"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button onClick={handleButtonClick} text="Search" />
    </div>
  );
}

export default SearchBar;
