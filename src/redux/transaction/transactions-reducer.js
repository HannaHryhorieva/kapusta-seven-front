import {
  fetchAddTransaction,
  fetchAllTransactions,
  fetchAllTransactionsByYear,
  fetchAllTransactionsByYearMonth,
  fetchDeleteTransaction,
} from './transactions-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const allTransactions = createReducer([], {
  [fetchAllTransactions.fulfilled]: (_, { payload }) => payload,
  [fetchAddTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
});

const allTransactionsByYear = createReducer([], {
  [fetchAllTransactionsByYear.fulfilled]: (_, { payload }) => payload,
  [fetchAddTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
});

const allTransactionsByYearMonth = createReducer([], {
  [fetchAllTransactionsByYearMonth.fulfilled]: (_, { payload }) => payload,
  [fetchAddTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
});

const isLoading = createReducer(false, {
  [fetchAllTransactions.pending]: () => true,
  [fetchAllTransactionsByYear.pending]: () => true,
  [fetchAllTransactionsByYearMonth.pending]: () => true,
  [fetchAddTransaction.pending]: () => true,
  [fetchDeleteTransaction.pending]: () => true,
  [fetchAllTransactions.fulfilled]: () => false,
  [fetchAllTransactionsByYear.fulfilled]: () => false,
  [fetchAllTransactionsByYearMonth.fulfilled]: () => false,
  [fetchAddTransaction.fulfilled]: () => false,
  [fetchDeleteTransaction.fulfilled]: () => false,
  [fetchAllTransactions.rejected]: () => false,
  [fetchAllTransactionsByYear.rejected]: () => false,
  [fetchAllTransactionsByYearMonth.rejected]: () => false,
  [fetchAddTransaction.rejected]: () => false,
  [fetchDeleteTransaction.rejected]: () => false,
});
const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [fetchAllTransactions.rejected]: setError,
  [fetchAllTransactionsByYear.rejected]: setError,
  [fetchAllTransactionsByYearMonth.rejected]: setError,
  [fetchAddTransaction.rejected]: setError,
  [fetchDeleteTransaction.rejected]: setError,
});

export default combineReducers({
  allTransactions,
  allTransactionsByYear,
  allTransactionsByYearMonth,
  isLoading,
  error,
});
