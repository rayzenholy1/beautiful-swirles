import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    // Емуляція запиту (у реальному коді тут fetch)
    if (city.toLowerCase() === "kyiv") {
      setWeather({ temp: 25, description: "Sunny" });
    } else {
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Погода</h1>
      <input
        placeholder="Введіть місто"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        data-testid="city-input"
      />
      <button onClick={fetchWeather} data-testid="search-btn">
        Знайти
      </button>
      {weather && (
        <div data-testid="weather-display">
          <p>Температура: {weather.temp}°C</p>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
}
