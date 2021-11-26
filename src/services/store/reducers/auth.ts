import { createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
  loading: IsLoadingFlag;
  sessionKey: ShortText | null;
  login: ShortText | null;
  sublogin: ShortText | null;
  errorMessage: ShortText;
}

const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  errorMessage: "",
} as IAuthInitialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => ({
      ...state,
      loading: true,
    }),
    authSuccess: (state, action) => ({
      ...state,
      loading: false,
      sessionKey: action.payload.sessionKey,
      login: action.payload.login,
      sublogin: action.payload.sublogin,
    }),
    logOut: (state) => ({
      ...state,
      loading: false,
      sessionKey: null,
      login: null,
      sublogin: null,
    }),
    logError: (state, action) => ({
      ...state,
      errorMessage: action.payload.err,
    }),
  },
});

export const { authenticate, authSuccess, logOut, logError } =
  authSlice.actions;

export default authSlice.reducer;
