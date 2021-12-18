import {
  transactionsActions,
  transactionsSelectors,
} from '../redux/transaction';

import BalanceView from '../components/BalanceView/BalanceView';
import BaseView from './BaseView';
import { Box } from '@mui/material';
import BtnGoToReports from '../components/BtnGoToReports/BtnGoToReports';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';
import React from 'react';
import TransactionsWrapper from '../components/TransactionsList/TransactionsWrapper';
import { useSelector } from 'react-redux';

function HomeView() {
  const error = useSelector(transactionsSelectors.getTransactionsError);

  return (
    <>
      <BaseView>
        {error && (
          <ErrorNotification
            message={error}
            action={transactionsActions.resetError}
          />
        )}
        <Box
          sx={{
            display: 'flex',
            marginTop: '40px',
            marginBottom: '10px',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <BalanceView />
          </Box>
          <Box>
            <BtnGoToReports />
          </Box>
        </Box>
        <TransactionsWrapper />
      </BaseView>
    </>
  );
}

export default HomeView;
