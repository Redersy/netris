import React from "react";
import { render, screen } from "@testing-library/react";
import { Timestamps } from "./ui";

const list = [
  {
    id: 1,
    zone: {
      width: 10,
      height: 10,
      left: 0,
      top: 0
    },
    start: 1,
    finish: 100
  }
];

describe("Timestamps", () => {
  test("Render", () => {
    render(<Timestamps list={list} />);

    const element = screen.getByTestId("timestamp-1");
    expect(element).toBeInTheDocument();
  });
  test("Loading", () => {
    const { asFragment } = render(<Timestamps list={list} isLoading={true} />);

    expect(asFragment()).toHaveTextContent("Loading");
  });
  test("Error", () => {
    const { asFragment } = render(<Timestamps list={list} error="Error text" />);

    expect(asFragment()).toHaveTextContent("Error text");
  });
  test("Snapshot", () => {
    const { asFragment } = render(<Timestamps list={list} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
