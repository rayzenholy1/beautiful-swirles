import { render, screen, fireEvent } from "@testing-library/react";
import Cities from "./Cities";
import "@testing-library/jest-dom";

test("показує деталі при кліку на місто", () => {
  render(<Cities />);

  expect(
    screen.getByText("Оберіть місто для перегляду деталей")
  ).toBeInTheDocument();
  expect(screen.queryByText("Місто кави та левів.")).not.toBeInTheDocument();

  const lvivBtn = screen.getByText("Львів");
  fireEvent.click(lvivBtn);

  expect(screen.getByText("Місто кави та левів.")).toBeInTheDocument();

  expect(
    screen.queryByText("Оберіть місто для перегляду деталей")
  ).not.toBeInTheDocument();
});
