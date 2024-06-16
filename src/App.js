import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [warning, setWarning] = useState("");

  const apiKey = "8546fca5aa9927c62e823337ca27818f";

  const fetchWeather = () => {
    if (!input) {
      setWarning("Please enter the city name or zip code");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          setWarning("Location not found");
          return;
        }
        setWarning("");
        setLocations([...locations, data]);
        setInput("");
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWarning("Error fetching weather data");
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <h1>Weather App</h1>
        <div className="search">
          <input
            type="text"
            id="locationInput"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city name or zip code"
          />
          <button
            id="searchButton"
            className="btn-primary"
            onClick={fetchWeather}
          >
            Search
          </button>
        </div>
        {warning && (
          <div id="warning" className="warning">
            {warning}
          </div>
        )}
        <div id="weatherContainer">
          {locations.map((location, index) => (
            <WeatherCard key={index} data={location} />
          ))}
        </div>
        <button
          id="toggleMode"
          className="btn-secondary"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default App;
