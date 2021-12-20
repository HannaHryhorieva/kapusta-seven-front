import {
  fetchGoogleAuth,
  fetchGoogleRedirect,
  fetchSignin,
  fetchSignup,
} from './auth-operations';
import { logoutUser } from './auth-actions';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [fetchSignup.fulfilled]: (_, { payload }) => payload.data,
  [fetchSignin.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleAuth.fulfilled]: (_, { payload }) => payload.user,
  [fetchGoogleRedirect.fulfilled]: (_, { payload }) => payload,
  [logoutUser]: () => initialUserState,
});

const token = createReducer(null, {
  [fetchSignin.fulfilled]: (_, { payload }) => payload.token,
  [logoutUser]: () => null,
});

const setError = (_, { payload }) => payload;

const status = createReducer(null, {
  [fetchSignup.rejected]: setError,
  [fetchSignup.fulfilled]: (_, { payload }) => payload.code,
  [fetchGoogleAuth.rejected]: setError,
  [fetchGoogleRedirect.rejected]: setError,
  [fetchSignin.rejected]: setError,
  [fetchSignin.fulfilled]: null,
});

const isLoggedIn = createReducer(false, {
  [fetchGoogleAuth.fulfilled]: () => true,
  [fetchGoogleRedirect.fulfilled]: () => true,
  [fetchSignin.fulfilled]: () => true,
  [logoutUser]: () => false,
  [fetchGoogleAuth.rejected]: () => false,
  [fetchGoogleRedirect.rejected]: () => false,
  [fetchSignin.rejected]: () => false,
});

export default combineReducers({
  user,
  isLoggedIn,
  token,
  status,
});
