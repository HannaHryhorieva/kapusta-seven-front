import {
  fetchGoogleAuth,
  fetchGoogleRedirect,
  fetchSignin,
  fetchSignup,
  fetchCurrentUser,
  fetchLogout,
} from './auth-operations';
// import { logoutUser } from './auth-actions';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
  //[fetchSignup.fulfilled]: (_, { payload }) => payload.user,

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
});

const isLoggedIn = createReducer(false, {
  [fetchCurrentUser.fulfilled]: () => true,
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

export default combineReducers({
  user,
  isLoggedIn,
  token,
  status,
});
