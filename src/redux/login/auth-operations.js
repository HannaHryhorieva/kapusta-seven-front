import * as authApi from '../../api-service/authApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchSignup(user);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchGoogleAuth = createAsyncThunk(
  'auth/fetchGoogleAuth',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchGoogleAuth();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchGoogleRedirect = createAsyncThunk(
  'auth/fetchGoogleRedirect',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchGoogleRedirect();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchVerify = createAsyncThunk(
  'auth/fetchVerify',
  async (verificationToken, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchVerify(verificationToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchSignin = createAsyncThunk(
  'auth/fetchSignin',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchSignin(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (token, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchLogout(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',

  async (token, { rejectWithValue }) => {
    if (token === null) {
      return rejectWithValue();
    }
    try {
      const data = await authApi.fetchCurrentUser(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//cheching
const authOperations = {
  fetchSignup,
  fetchGoogleAuth,
  fetchGoogleRedirect,
  fetchVerify,
  fetchSignin,
  fetchLogout,
  fetchCurrentUser,
};

export default authOperations;
