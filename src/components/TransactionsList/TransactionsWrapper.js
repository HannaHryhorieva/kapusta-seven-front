import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TransactionList from './TransactionList';
import TransactionTabs from './TransactionTabs';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transaction';

function TransactionsWrapper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getAllTransactions);
  const selectedDate = useSelector(transactionsSelectors.getSelectedDate);

  useEffect(() => {
    dispatch(transactionsOperations.fetchAllTransactionsByMonth(selectedDate));
  }, [dispatch, selectedDate]);

  return (
    <>
      {isMobile ? (
        <TransactionList transactions={transactions} />
      ) : (
        <TransactionTabs transactions={transactions} />
      )}
    </>
  );
}

export default TransactionsWrapper;
