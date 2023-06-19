import { useEffect, useState } from "react";
import { List } from "./list";
import { SquaresType } from "../model";

export const Squares = ({ list, videoRef }: SquaresType) => {
  const [squares, setSquares] = useState<typeof list>([]);

  useEffect(() => {
    const handleProgress = () => {
      if (videoRef?.current) {
        const time = videoRef?.current?.currentTime * 1000;
        const filtered = list.filter((item) => item.start <= time && time <= item.finish);

        setSquares(filtered);
      }
    };

    videoRef?.current?.addEventListener("timeupdate", () => handleProgress());
    return videoRef?.current?.removeEventListener("timeupdate", () => handleProgress());
  }, [list, squares, videoRef]);

  return <List list={squares} />;
};
