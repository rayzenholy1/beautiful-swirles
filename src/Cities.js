import React, { useState } from "react";

export default function Cities() {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "Львів", details: "Місто кави та левів." },
    { name: "Харків", details: "Місто студентів та парків." },
  ];

  return (
    <div>
      <h1>Міста України</h1>
      <div>
        {cities.map((city) => (
          <button key={city.name} onClick={() => setSelectedCity(city)}>
            {city.name}
          </button>
        ))}
      </div>

      <div data-testid="details-section">
        {selectedCity ? (
          <p>{selectedCity.details}</p>
        ) : (
          <p>Оберіть місто для перегляду деталей</p>
        )}
      </div>
    </div>
  );
}
