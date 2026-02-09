import React, { useState } from "react";

export default function Cinema() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Месники", time: "10:00" },
    { id: 2, title: "Дюна", time: "14:00" },
    { id: 3, title: "Барбі", time: "18:00" },
  ]);

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h1>Розклад сеансів</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} data-testid="movie-item">
            {movie.title} - {movie.time}
            <button
              onClick={() => removeMovie(movie.id)}
              aria-label={`delete-${movie.title}`}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
