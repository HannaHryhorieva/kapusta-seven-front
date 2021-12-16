import React from 'react';
// import TransactionList from './../components/TransactionsList/TransactionList';
// import TransactionTabs from './../components/TransactionsList/TransactionTabs';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
import TransactionsWrapper from '../components/TransactionsList/TransactionsWrapper';
import { useSelector } from 'react-redux';
import {
  transactionsSelectors,
  transactionsActions,
} from '../redux/transaction';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';

function HomeView() {
  const error = useSelector(transactionsSelectors.getTransactionsError);

  return (
    <>
      {error && (
        <ErrorNotification
          message={error}
          action={transactionsActions.resetError}
        />
      )}
      <TransactionsWrapper />
    </>
  );
}

export default HomeView;
