import * as authApi from '../../api-service/authApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUpdBalance = createAsyncThunk(
  'auth/fetchUpdBalance',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authApi.fetchUpdBalance(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
