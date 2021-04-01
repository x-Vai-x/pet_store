import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";

import petsReducer from "./slices/petsSlice";

const rootReducer = combineReducers({
  pets: petsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector = createSelectorHook<RootState>();
