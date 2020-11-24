import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App component", () => {
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
