import { render, screen, fireEvent } from "@testing-library/react";
import Cinema from "./Cinema";
import "@testing-library/jest-dom";

test("відображає список фільмів та видаляє один", () => {
  render(<Cinema />);

  const movieItems = screen.getAllByTestId("movie-item");
  expect(movieItems).toHaveLength(3);

  expect(screen.getByText(/Дюна/i)).toBeInTheDocument();

  const deleteBtn = screen.getByLabelText("delete-Дюна");
  fireEvent.click(deleteBtn);

  const updatedItems = screen.getAllByTestId("movie-item");
  expect(updatedItems).toHaveLength(2);
  expect(screen.queryByText(/Дюна/i)).not.toBeInTheDocument();
});
