import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("exists", () => {
    render(<App />);
  });

  it("renders default greeting", () => {
    render(<App />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("renders another greeting", () => {
    const greeting = "Hi friend!";
    render(<App greeting={greeting} />);
    expect(screen.getByText(greeting)).toBeInTheDocument();
  });
});
