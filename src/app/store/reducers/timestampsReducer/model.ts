import { AxiosError } from "axios";

export type TimestampStateType = {
  list: TimestampType[];
  loading?: boolean;
  error?: string | boolean;
};

type TimestampType = {
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

export enum TimestampsActionTypes {
  FETCH_TIMESTAMPS = "FETCH_TIMESTAMPS",
  SET_TIMESTAMPS = "SET_TIMESTAMPS",
  SET_TIMESTAMPS_ERROR = "SET_TIMESTAMPS_ERROR"
}

export type FetchTimestampsAction = {
  type: TimestampsActionTypes.FETCH_TIMESTAMPS;
  loading: boolean;
};
export type FetchTimestampsActionFunction = () => FetchTimestampsAction;

export type SetTimestampsAction = {
  type: TimestampsActionTypes.SET_TIMESTAMPS;
  payload: TimestampStateType["list"];
};
export type SetTimestampsActionFunction = (payload: TimestampStateType["list"]) => SetTimestampsAction;

export type SetTimestampsErrorAction = {
  type: TimestampsActionTypes.SET_TIMESTAMPS_ERROR;
  error: string | boolean;
};
export type SetTimestampsErrorActionFunction = (e: AxiosError) => SetTimestampsErrorAction;

export type TimestampAction = FetchTimestampsAction | SetTimestampsAction | SetTimestampsErrorAction;

export const initialState: TimestampStateType = {
  list: [],
  loading: true,
  error: false
};
