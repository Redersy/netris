import {
  FetchTimestampsActionFunction,
  SetTimestampsActionFunction,
  SetTimestampsErrorActionFunction,
  TimestampsActionTypes
} from "./model";

export const fetchTimestamps: FetchTimestampsActionFunction = () => ({
  type: TimestampsActionTypes.FETCH_TIMESTAMPS,
  loading: true
});

export const setTimestamps: SetTimestampsActionFunction = (payload) => ({
  type: TimestampsActionTypes.SET_TIMESTAMPS,
  payload
});

export const setTimestampsError: SetTimestampsErrorActionFunction = (e) => ({
  type: TimestampsActionTypes.SET_TIMESTAMPS_ERROR,
  error: e.message
});
