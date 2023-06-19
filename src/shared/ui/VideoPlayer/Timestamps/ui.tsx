import React from "react";
import { getTime, TimestampsType } from "../model";

export const Timestamps = ({ list, isLoading, error, videoRef }: TimestampsType) => {
  const handleChangeTime = (time: number) => {
    videoRef?.current && (videoRef.current.currentTime = time);
  };

  if (isLoading) return <>Loading...</>;
  if (!!error) return <>{error}</>;

  return (
    <div className="timestamps">
      {list.map((item) => {
        const { minutesWithPad, secondsWithPad, millisecondsWithPad } = getTime(item.start);
        return (
          <div
            key={`timestamp-${item.id}`}
            data-testid={`timestamp-${item.id}`}
            className="timestamps__item"
            onClick={() => handleChangeTime(item.start / 1000)}
          >{`${minutesWithPad}:${secondsWithPad}:${millisecondsWithPad}`}</div>
        );
      })}
    </div>
  );
};
