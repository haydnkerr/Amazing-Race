import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Btn from "./Btn";

describe("Btn Component", () => {
  test("renders with correct text", () => {
    render(<Btn text="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("applies className from props", () => {
    render(<Btn text="Click Me" class="my-class" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("my-class");
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Btn text="Click Me" onClick={handleClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
