import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchSignup,
  fetchGoogleAuth,
  fetchGoogleRedirect,
  // fetchVerify,
  fetchSignin,
  fetchLogout,
} from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [fetchSignup.fulfilled]: (_, { payload }) => payload.user,
  [fetchSignin.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleAuth.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleRedirect.fulfilled]: (_, { payload }) => payload,
  [fetchLogout.fulfilled]: () => initialUserState,
});

const token = createReducer(null, {
  [fetchSignup.fulfilled]: (_, { payload }) => payload.verificationToken,
  [fetchSignin.fulfilled]: (_, { payload }) => payload.token,
  [fetchLogout.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchSignup.rejected.rejected]: setError,
  [fetchGoogleAuth.rejected]: setError,
  [fetchGoogleRedirect.rejected]: setError,
  [fetchSignin.rejected]: setError,
  [fetchLogout.rejected]: setError,
});

const isLoggedIn = createReducer(false, {
  [fetchSignup.fulfilled]: () => true,
  [fetchGoogleAuth.fulfilled]: () => true,
  [fetchGoogleRedirect.fulfilled]: () => true,
  [fetchSignin.fulfilled]: () => true,
  [fetchLogout.fulfilled]: () => false,
  [fetchSignup.rejected]: () => false,
  [fetchGoogleAuth.rejected]: () => false,
  [fetchGoogleRedirect.rejected]: () => false,
  [fetchSignin.rejected]: () => false,
});

export default combineReducers({
  user,
  isLoggedIn,
  token,
  error,
});
