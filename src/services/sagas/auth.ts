import { put, call, takeEvery } from "redux-saga/effects";
import api from "../helpers/sendsay";
import {
  authenticate,
  authFail,
  authSuccess,
  logError,
} from "../store/reducers/auth";

export function* authCheckSaga() {
  try {
    yield api.sendsay.request({
      action: "pong",
    });
  } catch (error: any) {
    if (error.id === "error/auth/failed") {
      yield call(logoutSaga);
    }
  }
}

export function* tryAuthSaga({ payload }: any) {
  let error = null;
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err: any) => {
      error = err;
    });

  if (error) {
    yield authFailedSaga(error);
    return;
  }

  yield authSuccessSaga({
    sessionKey: api.sendsay.session,
    login: payload.login,
    sublogin: payload.sublogin,
  });
}

function* authSuccessSaga(payload: any) {
  yield put(authSuccess({ ...payload }));
}

function* authFailedSaga(err: any) {
  const error = `{ id: "${err.id}", explain: "${err.explain}"}`;

  console.error("err", err);

  yield logoutSaga();
  yield put(logError({ err: error }));
}

export function* logoutSaga() {
  yield put(authFail());
  document.cookie = "";
}

export function* root() {
  yield takeEvery(authenticate, tryAuthSaga);
}
