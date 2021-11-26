import { put, takeEvery } from "redux-saga/effects";
import api from "../helpers/sendsay";
import {
  addErrorText,
  addRequest,
  addResponse,
  endSendingRequest,
  startSendingRequest,
  setOrganizedRequests,
} from "../store/reducers/requests";
import { checkIfUnicRequest, reorganizeRequests } from "../utilities/utilities";

export function* trySendRequest({ payload }: any) {
  let error = null;
  let response = null;

  const { parsed, requests } = payload;

  yield api.sendsay
    .request(parsed)
    .then((res: any) => (response = res))
    .catch((err: any) => (error = err));

  if (error) {
    yield handleFailedRequest({ parsed, requests, error });
    return;
  }

  yield handleSuccessfulRequest({ parsed, requests, response });
  yield put(endSendingRequest());
}

function* handleSuccessfulRequest({ parsed, requests, response }: any) {
  yield handleOrginizeRequests({ parsed, requests, success: true });

  yield put(
    addResponse({
      response: {
        sublogin: response.sublogin,
        account: response.account,
        action: parsed.action,
        id: response.id,
      },
    })
  );
}

function* handleFailedRequest({ parsed, requests, error }: any) {
  console.error(error);
  yield handleOrginizeRequests({ parsed, requests, success: false });

  yield put(addErrorText(error.id));
  yield put(endSendingRequest());
}

function* handleOrginizeRequests({ parsed, requests, success }: any) {
  const existedRequestIndex: number | null = checkIfUnicRequest({
    req: parsed,
    requests,
  });

  if (existedRequestIndex === null) {
    yield put(
      addRequest({
        request: { action: parsed, success: success },
      })
    );
  } else {
    const reorganized = reorganizeRequests({
      requests,
      index: existedRequestIndex,
    });
    yield put(setOrganizedRequests(reorganized));
  }
}

export function* rootRequests() {
  yield takeEvery(startSendingRequest, trySendRequest);
}
