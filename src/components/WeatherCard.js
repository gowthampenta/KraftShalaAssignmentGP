import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="card">
      <h2 id="location">
        {data.name}, {data.sys.country}
      </h2>
      <p id="temperature">Temperature: {data.main.temp}°C</p>
      <p id="datetime">Date & Time: {new Date().toLocaleString()}</p>
      <p id="description">Description: {data.weather[0].description}</p>
      <p id="humidity">Humidity: {data.main.humidity}%</p>
      <p id="wind-speed">Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
