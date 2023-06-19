import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./list";

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
describe("Squares", () => {
  test("Render list", () => {
    render(<List list={list} />);

    const square = screen.getByTestId("square-1");
    expect(square).toBeInTheDocument();
  });
  test("Snapshot list", () => {
    const { asFragment } = render(<List list={list} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
