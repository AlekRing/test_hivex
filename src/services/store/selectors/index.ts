// Auth
export const selectLogin = (state: any) => state.auth.login;
export const selectSublogin = (state: any) => state.auth.sublogin;
export const selectIsLoggedIn = (state: any) => state.auth.login;
export const selectLoading = (state: any) => state.auth.loading;
export const selectAuthError = (state: any) => state.auth.errorMessage;

//Requests & responses
export const selectRequests = (state: any) => state.requests.requests;
export const selectIsSending = (state: any) =>
  state.requests.sending.length
    ? state.requests.sending.reverse()
    : state.requests.sending;
export const selectResponse = (state: any) => state.requests.response;
export const selectIsValidResponse = (state: any) =>
  state.requests.requests.length ? state.requests.requests[0].success : true;
export const selectErrorText = (state: any) => state.requests.errorText;
