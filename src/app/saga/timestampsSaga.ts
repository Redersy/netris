import { AxiosError, AxiosResponse } from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { apiGetTimestamps, TimestampResponseType } from "../../shared/api";
import { TimestampsActionTypes, setTimestamps, setTimestampsError } from "../store/reducers";

function* fetchTimestampsGenerator() {
  try {
    const response: typeof apiGetTimestamps = yield call(apiGetTimestamps);

    const data: AxiosResponse<TimestampResponseType> = yield call(() => response);

    const responseTimestamps = data.data.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));

    const timestamps: ReturnType<typeof setTimestamps>["payload"] = responseTimestamps.map((item) => ({
      id: item.id,
      start: item.timestamp,
      finish: item.timestamp + item.duration,
      zone: item.zone
    }));

    yield put(setTimestamps(timestamps));
  } catch (e) {
    const error = e as AxiosError;
    yield put(setTimestampsError(error));
  }
}

export function* timestampsWatcher() {
  yield takeEvery(TimestampsActionTypes.FETCH_TIMESTAMPS, fetchTimestampsGenerator);
}
