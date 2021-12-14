import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { expenseToBalance, incomeToBalance } from './balance-actions';
import { fetchUpdBalance } from './balance-operations';

const balance = createReducer(null, {
  [expenseToBalance]: (state, { payload }) => state.balance - payload,
  [incomeToBalance]: (state, { payload }) => state.balance + payload,
  [fetchUpdBalance.fulfilled]: (_, { payload }) => payload.balance,
});

export default combineReducers({
  balance,
});
