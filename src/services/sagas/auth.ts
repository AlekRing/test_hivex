import { put, takeEvery } from "redux-saga/effects";
import api from "../helpers/sendsay";
import {
  authenticate,
  logOut,
  authSuccess,
  logError,
} from "../store/reducers/auth";

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
  yield put(authSuccess(payload));
}

function* authFailedSaga(err: any) {
  const error = `{ id: "${err.id}", explain: "${err.explain}"}`;

  console.error("err", err);

  yield logoutSaga();
  yield put(logError({ err: error }));
}

export function* logoutSaga() {
  yield put(logOut());
  document.cookie = "";
}

export function* root() {
  yield takeEvery(authenticate, tryAuthSaga);
}
