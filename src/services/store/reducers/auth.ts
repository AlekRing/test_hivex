import { createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
  loading: boolean;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
}

const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
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
    authFail: (state) => ({
        ...state,
        loading: false,
        sessionKey: null,
        login: null,
        sublogin: null
    })
  },
});

export const { authenticate, authSuccess, authFail } = authSlice.actions;
export default authSlice.reducer;