import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../api-service/authApi';

const fetchUpdBalance = createAsyncThunk(
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
const operations = { fetchUpdBalance };
export default operations;
