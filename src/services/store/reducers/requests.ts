import { createSlice } from "@reduxjs/toolkit";

export interface IRequestsInitialState {
  loading: boolean;
  requests: string[];
}

const initialState = {
  loading: false,
  requests: [],
} as IRequestsInitialState;

const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        addRequest: (state, action) => ({
            ...state,
            requests: [...state.requests, action.payload.request]
        }),
    }
});

export default requestsSlice.reducer;