import {
  TypedUseSelectorHook,
  useSelector as useDefaultSelector,
  useDispatch as useDefaultDispatch
} from "react-redux";
import { rootReducer } from "./reducers";
import { store } from "./";

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch;
