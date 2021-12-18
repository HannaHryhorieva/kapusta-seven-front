import { createAction } from '@reduxjs/toolkit';

export const expenseToBalance = createAction('balance/expense');
export const incomeToBalance = createAction('balance/income');
