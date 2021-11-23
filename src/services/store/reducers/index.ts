import { combineReducers } from "redux";
import authReducer from "./auth";
import requestsReducer from "./requests";

export const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
});
