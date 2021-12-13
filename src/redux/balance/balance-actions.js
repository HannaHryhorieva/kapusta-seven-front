import { createAction } from '@reduxjs/toolkit';

export const expenseToBalance = createAction('balance/expense');
export const incomeToBalance = createAction('balance/expense');

// export const fetchCurrentBalanceRequest = createAction(
//   'balance/fetchCurrentBalanceRequest',
// );
// export const fetchCurrentBalanceSuccess = createAction(
//   'balance/fetchCurrentBalanceSuccess',
// );
// export const fetchCurrentBalanceError = createAction(
//   'balance/fetchCurrentBalanceError',
// );
export const updateBalanceRequest = createAction(
  'balance/updateBalanceRequest',
);
export const updateBalanceSuccess = createAction(
  'balance/updateBalanceSuccess',
);
export const updateBalanceError = createAction('balance/updateBalanceError');
