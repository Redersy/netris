import { combineReducers } from "redux";
import { timestampsReducer } from "./timestampsReducer";

export const rootReducer = combineReducers({
  timestamps: timestampsReducer
});

export * from "./timestampsReducer";
