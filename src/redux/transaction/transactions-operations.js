import * as transactionsApi from '../../api-service/transactionsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchAllTransactions = createAsyncThunk(
//   'transactions/fetchAllTransactions',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await transactionsApi.allTransactions();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const fetchTransactionsSummaryByYear = createAsyncThunk(
  'transactions/fetchTransactionsSummaryByYear',
  async (year, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactionsByYear(year);
      return data;
    } catch (error) {
      return rejectWithValue(error.messeg);
    }
  },
);

export const fetchAllTransactionsByCategory = createAsyncThunk(
  'transactions/fetchAllTransactionsByCategory',
  async (date, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactionsByCategory(date);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAllTransactionsByMonth = createAsyncThunk(
  'transactions/fetchAllTransactionsByMonth',
  async (date, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactionsByMonth(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAddTransaction = createAsyncThunk(
  'transactions/fetchAddTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.addTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchDeleteTransaction = createAsyncThunk(
  'transactions/fetchDeleteTransaction',
  async (idTransaction, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.deleteTransaction(idTransaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
