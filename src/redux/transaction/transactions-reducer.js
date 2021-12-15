import {
  fetchAddTransaction,
  fetchAllTransactionsByMonth,
  fetchDeleteTransaction,
  fetchTransactionsSummaryByYear,
} from './transactions-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// const allTransactions = createReducer([], {
//   [fetchAllTransactions.fulfilled]: (_, { payload }) => payload,
//   [fetchAddTransaction.fulfilled]: (state, { payload }) => [
//     ...state,
//     ...payload,
//   ],
//   [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
// });

const transactionsByMonth = createReducer([], {
  [fetchAllTransactionsByMonth.fulfilled]: (_, { payload }) =>
    payload.map(item => ({
      ...item,
      date: `${item.day}.${item.month}.${item.year}`,
    })),
  //todo implement add and delete transactions
});

const summaryByYear = createReducer([], {
  //todo check and fix summary
  [fetchTransactionsSummaryByYear.fulfilled]: (_, { payload }) => payload,
  [fetchAddTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
});

const initialDate = {
  day: new Date().getDay(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
  //todo add logic for date
});

// const allTransactionsByYearMonth = createReducer([], {
//   [fetchAllTransactionsByYearMonth.fulfilled]: (_, { payload }) => payload,
//   [fetchAddTransaction.fulfilled]: (state, { payload }) => [
//     ...state,
//     ...payload,
//   ],
//   [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
// });

const isLoading = createReducer(false, {
  [fetchAllTransactionsByMonth.pending]: () => true,
  [fetchAllTransactionsByMonth.fullfilled]: () => false,
  [fetchAllTransactionsByMonth.rejected]: () => false,

  // [fetchAllTransactions.pending]: () => true,
  // [fetchAllTransactions.fulfilled]: () => false,
  // [fetchAllTransactions.rejected]: () => false,

  [fetchTransactionsSummaryByYear.pending]: () => true,
  [fetchTransactionsSummaryByYear.fulfilled]: () => false,
  [fetchTransactionsSummaryByYear.rejected]: () => false,

  // [fetchAllTransactionsByYearMonth.pending]: () => true,
  // [fetchAllTransactionsByYearMonth.fulfilled]: () => false,
  // [fetchAllTransactionsByYearMonth.rejected]: () => false,

  [fetchAddTransaction.pending]: () => true,
  [fetchAddTransaction.fulfilled]: () => false,
  [fetchAddTransaction.rejected]: () => false,

  [fetchDeleteTransaction.pending]: () => true,
  [fetchDeleteTransaction.fulfilled]: () => false,
  [fetchDeleteTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchAllTransactionsByMonth.pending]: () => null,
  [fetchAllTransactionsByMonth.rejected]: setError,

  // [fetchAllTransactions.pending]: () => null,
  // [fetchAllTransactions.rejected]: setError,

  [fetchTransactionsSummaryByYear.pending]: () => null,
  [fetchTransactionsSummaryByYear.rejected]: setError,

  // [fetchAllTransactionsByYearMonth.pending]: () => null,
  // [fetchAllTransactionsByYearMonth.rejected]: setError,

  [fetchAddTransaction.pending]: () => null,
  [fetchAddTransaction.rejected]: setError,

  [fetchDeleteTransaction.pending]: () => null,
  [fetchDeleteTransaction.rejected]: setError,
});

export default combineReducers({
  transactionsByMonth,
  summaryByYear,
  selectedDate,
  isLoading,
  error,
  // allTransactions,
  // allTransactionsByYearMonth,
});
