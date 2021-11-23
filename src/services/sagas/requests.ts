import { put, takeEvery } from "redux-saga/effects";
import api from "../helpers/sendsay";
import {
  addErrorText,
  addRequest,
  addResponse,
  endSendingRequest,
  startSendingRequest,
} from "../store/reducers/requests";

export function* trySendRequest({ payload }: any) {
  let error = null;
  let response = null;

  yield api.sendsay
    .request(payload)
    .then((res: any) => (response = res))
    .catch((err: any) => (error = err));

  if (error) {
    yield handleFailedRequest({ payload, error });
    return;
  }

  yield handleSuccessfulRequest({ payload, response });
  yield put(endSendingRequest());
}

function* handleSuccessfulRequest({ payload, response }: any) {
  yield put(
    addRequest({
      request: { action: payload, success: true },
    })
  );
  yield put(
    addResponse({
      response: {
        sublogin: response.sublogin,
        account: response.account,
        action: payload.action,
        id: response.id,
      },
    })
  );
}

function* handleFailedRequest({ payload, error }: any) {
  console.log(error.id);
  yield put(
    addRequest({
      request: { action: payload, success: false },
    })
  );
  yield put(addErrorText(error.id));
  yield put(endSendingRequest());
}

export function* rootRequests() {
  yield takeEvery(startSendingRequest, trySendRequest);
}
