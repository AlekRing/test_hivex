export const selectLogin = (state: any) => state.reducer.auth.login;
export const selectSublogin = (state: any) => state.reducer.auth.sublogin;
export const selectIsLoggedIn = (state: any) => state.reducer.auth.login;
export const selectLoading = (state: any) => state.reducer.auth.loading;
export const selectAuthError = (state: any) => state.reducer.auth.errorMessage;
