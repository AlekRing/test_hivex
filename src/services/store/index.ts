import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { root } from "../sagas/auth";
import { rootReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(root);