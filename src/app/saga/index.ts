import { all } from "redux-saga/effects";
import { timestampsWatcher } from "./timestampsSaga";

export function* rootWatcher() {
  yield all([timestampsWatcher()]);
}
