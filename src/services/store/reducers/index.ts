import { combineReducers } from "redux";
import authReducer from "./auth";
import requestsReducer from "./auth";

export const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
});
