import { createSlice } from "@reduxjs/toolkit";

export interface IRequestsInitialState {
  requests: ConsoleRequest[];
  sending: IsLoadingFlag;
  response: ConsoleResponse;
  errorText: ShortText;
}

const initialState = {
  requests: [],
  sending: false,
  response: null,
  errorText: "",
} as IRequestsInitialState;

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    startSendingRequest: (state, action) => ({ ...state, sending: true }),
    endSendingRequest: (state) => ({ ...state, sending: false }),
    addRequest: (state, action) => ({
      ...state,
      requests: [action.payload.request, ...state.requests],
    }),
    addResponse: (state, action) => ({
      ...state,
      response: action.payload.response,
    }),
    addErrorText: (state, action) => ({
      ...state,
      errorText: action.payload,
    }),
    clearRequests: (state) => ({
      ...state,
      requests: [],
    }),
    setOrganizedRequests: (state, action) => ({
      ...state,
      requests: action.payload,
    }),
  },
});

export const {
  addRequest,
  startSendingRequest,
  endSendingRequest,
  addResponse,
  addErrorText,
  clearRequests,
  setOrganizedRequests
} = requestsSlice.actions;

export default requestsSlice.reducer;
