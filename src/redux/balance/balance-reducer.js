import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  expenseToBalance,
  incomeToBalance,
  //   updateBalanceRequest,
  //   updateBalanceSuccess,
  //   updateBalanceError,
} from './balance-actions';

const balance = createReducer(null, {
  [expenseToBalance]: (state, { payload }) => state.balance - payload,
  [incomeToBalance]: (state, { payload }) => state.balance - payload,
});

export default combineReducers({
  balance,
});
