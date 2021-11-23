import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { root } from "../sagas/auth";
import { rootRequests } from "../sagas/requests";
import { rootReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(root);
sagaMiddleWare.run(rootRequests);
