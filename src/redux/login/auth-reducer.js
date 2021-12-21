import {
  fetchCurrentUser,
  fetchGoogleAuth,
  fetchGoogleRedirect,
  fetchLogout,
  fetchSignin,
  fetchSignup,
} from './auth-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { logoutUser } from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
  [fetchSignup.fulfilled]: (_, { payload }) => payload.data,
  [fetchSignin.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleAuth.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleRedirect.fulfilled]: (_, { payload }) => payload,
  [fetchLogout.fulfilled]: () => initialUserState,
});

const token = createReducer(null, {
  [fetchSignin.fulfilled]: (_, { payload }) => payload.token,
  [fetchLogout.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const status = createReducer(null, {
  [fetchSignin.fulfilled]: null,
  [fetchSignup.rejected]: setError,
  [fetchSignup.fulfilled]: (_, { payload }) => payload.code,
  [fetchGoogleAuth.rejected]: setError,
  [fetchGoogleRedirect.rejected]: setError,
  [fetchSignin.rejected]: setError,
  [fetchCurrentUser.rejected]: setError,

  [fetchLogout.fulfilled]: null,

  [fetchLogout.rejected]: () => setError,
});

const isLoggedIn = createReducer(false, {
  [fetchCurrentUser.fulfilled]: () => true,
  [fetchLogout.fulfilled]: () => false,
  // [fetchSignup.fulfilled]: () => true,
  [fetchGoogleAuth.fulfilled]: () => true,
  [fetchGoogleRedirect.fulfilled]: () => true,
  [fetchSignin.fulfilled]: () => true,
  [fetchLogout.fulfilled]: () => false,
  [fetchGoogleAuth.rejected]: () => false,
  [fetchGoogleRedirect.rejected]: () => false,
  [fetchSignin.rejected]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

const isLogging = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

export default combineReducers({
  user,
  isLoggedIn,
  token,
  status,
  isLogging,
});
