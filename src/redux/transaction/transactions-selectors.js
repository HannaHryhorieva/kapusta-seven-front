export const getAllTransactions = state =>
  state.transactions.transactionsByMonth;

export const getIncomeTransactions = state => {
  return state.transactions.transactionsByMonth.filter(item => item.isIncome);
};

export const getExpenseTransactions = state => {
  return state.transactions.transactionsByMonth.filter(item => !item.isIncome);
};

export const getSummaryByYear = state => state.transactions.transactionsByMonth;

// export const getAllTransactionsByYearMonth = state =>
//   state.transactions.allTransactionsByYearMonth;

export const getTransactionsIsLoading = state => state.transactions.isLoading;

export const getTransactionsError = state => state.transactions.error;

export const getSelectedDate = state => state.transactions.selectedDate;
