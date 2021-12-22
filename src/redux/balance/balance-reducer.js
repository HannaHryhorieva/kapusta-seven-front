import {
  fetchAddTransaction,
  fetchDeleteTransaction,
} from '../transaction/transactions-operations';
import { fetchCurrentUser, fetchSignin } from '../login/auth-operations';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchUpdBalance } from './balance-operations';

const balance = createReducer(0, {
  [fetchUpdBalance.fulfilled]: (_, { payload }) => payload.balance,
  [fetchSignin.fulfilled]: (_, { payload }) => payload.user.balance,
  [fetchCurrentUser.fulfilled]: (_, { payload }) => payload.balance,
  [fetchAddTransaction.fulfilled]: (state, { payload }) =>
    payload.data.isIncome
      ? state + payload.data.amount
      : state - payload.data.amount,
  [fetchDeleteTransaction.fulfilled]: (state, { payload }) =>
    payload.data.isIncome
      ? state - payload.data.amount
      : state + payload.data.amount,
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
