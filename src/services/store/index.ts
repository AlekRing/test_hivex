import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { root } from "../sagas/auth";
import { rootRequests } from "../sagas/requests";
import { rootReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleWare],
});

export const persistor = persistStore(store);

sagaMiddleWare.run(root);
sagaMiddleWare.run(rootRequests);
