
export const selectAuthToken = state => state.auth.token;
export const selectAuthUserData = state => state.auth.UserData;
export const selectAuthisLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoading = state => state.auth.isLoading;