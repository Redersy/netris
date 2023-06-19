import React from "react";
import { render, screen } from "@testing-library/react";
import { VideoPlayer } from "./ui";

const src = process.env.REACT_APP_VIDEO_SRC;

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Video player", () => {
  test("Rendered", () => {
    render(<VideoPlayer />);

    const player = screen.getByTestId("video") as HTMLMediaElement;
    expect(player).toBeInTheDocument();
    expect(player.paused).toBe(true);
  });
  test("Snapshot", () => {
    const { asFragment } = render(<VideoPlayer src={src} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
