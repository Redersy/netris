import { useEffect } from "react";
import { fetchTimestamps, useSelector, useDispatch } from "app/store";
import { VideoPlayer } from "shared/ui";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.timestamps);

  useEffect(() => {
    dispatch(fetchTimestamps());
  }, [dispatch]);

  return (
    <VideoPlayer
      src={process.env.REACT_APP_VIDEO_SRC}
      timestamps={{
        list,
        isLoading: loading,
        error: error
      }}
    />
  );
};
