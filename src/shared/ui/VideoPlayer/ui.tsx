import { Timestamps } from "./Timestamps";
import { Squares } from "./Squares";
import React, { useRef } from "react";
import { VideoProps } from "./model";
import "./styles.css";

export const VideoPlayer = ({ timestamps, ...props }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
  };

  return (
    <div className="video-player">
      <div className="video-player__wrapper" onClick={handleVideoClick}>
        <Squares list={timestamps?.list ?? []} videoRef={ref} />
        <video {...props} ref={ref} data-testid="video" />
      </div>

      <Timestamps
        list={timestamps?.list ?? []}
        isLoading={timestamps?.isLoading}
        error={timestamps?.error}
        videoRef={ref}
      />
    </div>
  );
};
