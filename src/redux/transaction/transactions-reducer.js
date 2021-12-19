import {
  fetchAddTransaction,
  fetchAllTransactionsByMonth,
  fetchDeleteTransaction,
  fetchTransactionsSummaryByYear,
  fetchAllTransactionsByCategory,
} from './transactions-operations';

import * as actions from './transactions-actions';

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
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(item => {
      return item._id !== payload.data._id;
    }),
  //todo implement add and delete transactions
});

const transactionsByCategory = createReducer([], {
  [fetchAllTransactionsByCategory.fulfilled]: (_, { payload }) => payload,
});

const summaryByYear = createReducer([], {
  //todo check and fix summary
  [fetchTransactionsSummaryByYear.fulfilled]: (_, { payload }) => payload,
  // [fetchAddTransaction.fulfilled]: (state, { payload }) => [
  //   ...state,
  //   ...payload,
  // ],
  // [fetchDeleteTransaction.fulfilled]: (state, { payload }) => [],
});

const initialDate = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const selectedDate = createReducer(initialDate, {
  [actions.selectedDate]: (_, { payload }) => payload,
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
  [fetchAllTransactionsByMonth.fulfilled]: () => false,
  [fetchAllTransactionsByMonth.rejected]: () => false,

  // [fetchAllTransactions.pending]: () => true,
  // [fetchAllTransactions.fulfilled]: () => false,
  // [fetchAllTransactions.rejected]: () => false,

  [fetchAllTransactionsByCategory.pending]: () => true,
  [fetchAllTransactionsByCategory.fulfilled]: () => false,
  [fetchAllTransactionsByCategory.rejected]: () => false,

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

  [fetchAllTransactionsByCategory.pending]: () => null,
  [fetchAllTransactionsByCategory.rejected]: () => setError,

  // [fetchAllTransactionsByYearMonth.pending]: () => null,
  // [fetchAllTransactionsByYearMonth.rejected]: setError,

  [fetchAddTransaction.pending]: () => null,
  [fetchAddTransaction.rejected]: setError,

  [fetchDeleteTransaction.pending]: () => null,
  [fetchDeleteTransaction.rejected]: setError,

  [actions.resetError]: () => null,
});

export default combineReducers({
  transactionsByMonth,
  transactionsByCategory,
  summaryByYear,
  selectedDate,
  isLoading,
  error,
  // allTransactions,
  // allTransactionsByYearMonth,
});
