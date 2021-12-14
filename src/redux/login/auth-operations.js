import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../api-service/authApi';

const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchSignup(user);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchGoogleAuth = createAsyncThunk(
  'auth/fetchGoogleAuth',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchGoogleAuth();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const fetchGoogleRedirect = createAsyncThunk(
  'auth/fetchGoogleRedirect',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchGoogleRedirect();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchVerify = createAsyncThunk(
  'auth/fetchVerify',
  async (verificationToken, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchVerify(verificationToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const fetchSignin = createAsyncThunk(
  'auth/fetchSignin',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchSignin(user);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchLogout();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  fetchSignup,
  fetchGoogleAuth,
  fetchGoogleRedirect,
  fetchVerify,
  fetchSignin,
  fetchLogout,
};
export default operations;
