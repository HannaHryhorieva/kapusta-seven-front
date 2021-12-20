import {
  transactionsActions,
  transactionsSelectors,
} from '../redux/transaction';

import BalanceView from '../components/BalanceView/BalanceView';
import BaseView from './BaseView';
import { DatePick } from '../components/DatePiker/DatePick';
import BtnGoToReports from '../components/BtnGoToReports/BtnGoToReports';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';
import React from 'react';
import TransactionsWrapper from '../components/TransactionsList/TransactionsWrapper';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function HomeView() {
  const error = useSelector(transactionsSelectors.getTransactionsError);
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <>
      <BaseView>
        {error && (
          <ErrorNotification
            message={error}
            action={transactionsActions.resetError}
          />
        )}
        <div className='home-mob-wrap'>
         {isMobile && <DatePick />}
          <BalanceView />
            <BtnGoToReports />
        </div>
        <TransactionsWrapper />
      </BaseView>
    </>
  );
}

export default HomeView;
