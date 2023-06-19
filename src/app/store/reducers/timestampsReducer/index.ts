import { initialState, TimestampAction, TimestampsActionTypes, TimestampStateType } from "./model";

export const timestampsReducer = (state = initialState, action: TimestampAction): TimestampStateType => {
  switch (action.type) {
    case TimestampsActionTypes.FETCH_TIMESTAMPS:
      return {
        list: [],
        error: false,
        loading: true
      };
    case TimestampsActionTypes.SET_TIMESTAMPS: {
      return {
        list: action.payload,
        error: false,
        loading: false
      };
    }
    case TimestampsActionTypes.SET_TIMESTAMPS_ERROR:
      return {
        list: [],
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export * from "./actions";
export * from "./model";
