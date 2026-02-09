import { render, screen, fireEvent } from "@testing-library/react";
import Weather from "./Weather";
import "@testing-library/jest-dom";

test("дозволяє ввести місто і відображає погоду", () => {
  render(<Weather />);

  const input = screen.getByTestId("city-input");
  const button = screen.getByTestId("search-btn");

  fireEvent.change(input, { target: { value: "Kyiv" } });

  expect(input.value).toBe("Kyiv");

  fireEvent.click(button);

  const weatherDisplay = screen.getByTestId("weather-display");
  expect(weatherDisplay).toBeInTheDocument();
  expect(screen.getByText(/Температура: 25°C/i)).toBeInTheDocument();
});
