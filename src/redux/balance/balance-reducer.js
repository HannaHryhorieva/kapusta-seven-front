import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { expenseToBalance, incomeToBalance } from './balance-actions';
import { fetchUpdBalance } from './balance-operations';

const balance = createReducer(0, {
  [expenseToBalance]: (state, { payload }) => state.balance - payload,
  [incomeToBalance]: (state, { payload }) => state.balance + payload,
  [fetchUpdBalance.fulfilled]: (_, { payload }) => payload.balance,
});

const isLoading = createReducer(false, {
  [fetchUpdBalance.pending]: () => true,
  [fetchUpdBalance.fulfilled]: () => false,
  [fetchUpdBalance.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchUpdBalance.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  isLoading,
  error,
});
