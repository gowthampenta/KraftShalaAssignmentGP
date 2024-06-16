import React, { useState } from "react";

function SearchBar({ fetchWeather }) {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeather(location);
    } else {
      fetchWeather("");
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        id="locationInput"
        className="form-control"
        placeholder="Enter city name or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button id="searchButton" className="btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
