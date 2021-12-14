import * as transactionsApi from '../../api-service/transactionsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAllTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactions();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAllTransactionsByYear = createAsyncThunk(
  'transactions/fetchAllTransactionsByYear',
  async (year, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactionsByYear(year);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAllTransactionsByYearMonth = createAsyncThunk(
  'transactions/fetchAllTransactionsByYearMonth',
  async (date, { rejectWithValue }) => {
    try {
      const data = await transactionsApi.allTransactionsByYearMonth(date);
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  },
);

// const operations = {
//   fetchAddTransaction,
//   fetchAllTransactions,
//   fetchAllTransactionsByYear,
//   fetchAllTransactionsByYearMonth,
//   fetchDeleteTransaction,
// };
// export default operations;
