export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getError = state => state.auth.error;
export const getVerificationToken = state => state.auth.user.verificationToken;
export const getToken = state => state.auth.token;
