import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionsApi from '../../api-service/transactionsApi';

const fetchAllTransactions = createAsyncThunk(
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

const fetchAllTransactionsByYear = createAsyncThunk(
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

const fetchAllTransactionsByYearMonth = createAsyncThunk(
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

const fetchAddTransaction = createAsyncThunk(
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
const fetchDeleteTransaction = createAsyncThunk(
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

const operations = {
  fetchAllTransactions,
  fetchAllTransactionsByYear,
  fetchAllTransactionsByYearMonth,
  fetchAddTransaction,
  fetchDeleteTransaction,
};
export default operations;
