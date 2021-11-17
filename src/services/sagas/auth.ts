import { put, call, takeEvery } from "redux-saga/effects";
import api from "../helpers/sendsay";
import { authenticate, authFail, authSuccess } from "../store/reducers/auth";

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
      document.cookie = "";
      console.log("err", err);
    });

  yield put(
    authSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      sublogin: payload.sublogin,
    })
  );
}

export function* logoutSaga() {
  yield put(authFail());
  document.cookie = "";
}

export function* root() {
  yield takeEvery(authenticate, tryAuthSaga);
}
