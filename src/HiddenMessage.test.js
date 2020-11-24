import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import HiddenMessage from "./HiddenMessage";

describe("HiddenMessage", () => {
  it("exists", () => {
    render(<HiddenMessage />);
  });
});

test("shows children when checkbox is checked", () => {
  const expectedMessage = "Ayyyy";

  render(<HiddenMessage>{expectedMessage}</HiddenMessage>);

  expect(screen.queryByText(expectedMessage)).toBeNull();

  fireEvent.click(screen.getByLabelText(/show/i));

  expect(screen.getByText(expectedMessage)).toBeInTheDocument();
});
