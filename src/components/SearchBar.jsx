import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // using react-icons
import "./SearchBar.css";

function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      onClear();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button type="button" className="clear-btn" onClick={handleClear}>
          <FaTimes />
        </button>
      )}
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default SearchBar;