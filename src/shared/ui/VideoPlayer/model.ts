import { DetailedHTMLProps, RefObject, VideoHTMLAttributes } from "react";

export interface VideoProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  timestamps?: Omit<TimestampsType, "ref">;
}

export type TimestampsType = {
  list: VideoTimestampType[];
  isLoading?: boolean;
  error?: string | boolean;
  videoRef?: RefObject<HTMLVideoElement>;
};

export type SquaresType = {
  list: VideoTimestampType[];
  videoRef?: RefObject<HTMLVideoElement>;
};

export type SquaresListType = Pick<SquaresType, "list">;

export type VideoTimestampType = {
  id: number;
  start: number;
  finish: number;
  zone: ZoneType;
};

type ZoneType = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type TimeType = {
  minutes: number;
  minutesWithPad: string;
  seconds: number;
  secondsWithPad: string;
  milliseconds: number;
  millisecondsWithPad: string;
};

export const getTime = (timestamp: number): TimeType => {
  const date = new Date(timestamp);

  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return {
    minutes,
    minutesWithPad: String(minutes).padStart(2, "0"),
    seconds,
    secondsWithPad: String(seconds).padStart(2, "0"),
    milliseconds,
    millisecondsWithPad: String(milliseconds).padStart(3, "0")
  };
};
