import React, { useEffect, useState } from 'react';
import {
  transactionsActions,
  transactionsOperations,
  transactionsSelectors,
} from '../redux/transaction';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import BalanceView from './../components/BalanceView/BalanceView';
import BaseView from './BaseView';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';
import { Box, LinearProgress } from '@mui/material';
import BtnGoToMain from '../components/BtnGoToMain/BtnGoToMain';
import CategoriesList from '../components/ReportList/CategoriesList';
import CurrentMonth from '../components/CurrentMonth/CurrentMonth';
import ReportChart from '../components/ReportChart/ReportChart';
import ReportSummary from '../components/ReportSummary/ReportSummary';
import getDataByCategory from '../helpers/getDataByCategory';

export default function ReportPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const { year: selectedYear, month: selectedMonth } = useSelector(
    transactionsSelectors.getSelectedDate,
  );

  const [type, setType] = useState('expense');
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);

  useEffect(() => {
    dispatch(
      transactionsOperations.fetchAllTransactionsByCategory({ year, month }),
    );
  }, [dispatch, month, year]);

  const transactionsByCategory =
    useSelector(transactionsSelectors.getTransactionsByCategory) || {};
  const isLoading = useSelector(transactionsSelectors.getTransactionsIsLoading);
  const error = useSelector(transactionsSelectors.getTransactionsError);

  const transactions = getDataByCategory(transactionsByCategory[type]);

  const [currentCategory, setCurrentCategory] = useState('');

  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
      setCurrentCategory('');
    }
    if (type === 'income') {
      setType('expense');
      setCurrentCategory('');
    }
  };

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
    setCurrentCategory('');
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
    setCurrentCategory('');
  };
  const onHandleChangeCategory = e => {
    setCurrentCategory(e.currentTarget.attributes.title.nodeValue);
  };

  return (
    <>
      <BaseView>
        {error && (
          <ErrorNotification
            message={error}
            action={transactionsActions.resetError}
          />
        )}
        {isMobile ? (
          <>
            <Box sx={{ margin: '20px 0 15px 20px', width: '280px' }}>
              <BtnGoToMain />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '40px',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: '30px' }}>
                <CurrentMonth
                  year={year}
                  month={month}
                  onHandleClickLeft={onHandleClickLeft}
                  onHandleClickRight={onHandleClickRight}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <BalanceView />
              </Box>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              marginTop: '40px',
              marginBottom: '30px',
              alignItems: 'center',
            }}
          >
            <BtnGoToMain />
            <Box sx={{ textAlign: 'center', marginLeft: '40px' }}>
              <BalanceView />
            </Box>
            <Box>
              <CurrentMonth
                year={year}
                month={month}
                onHandleClickLeft={onHandleClickLeft}
                onHandleClickRight={onHandleClickRight}
              />
            </Box>
          </Box>
        )}
        {isLoading && <LinearProgress />}
        {transactionsByCategory.hasOwnProperty('income' || 'expense') ? (
          <>
            <ReportSummary transactions={transactionsByCategory} />
            <CategoriesList
              transactions={transactions}
              type={type}
              onClick={() => onHandleChangeType()}
              handleClick={onHandleChangeCategory}
            />
            {transactions.length > 0 && (
              <ReportChart
                category={currentCategory || transactions[0].category}
                transactions={transactionsByCategory[type]}
              />
            )}
          </>
        ) : (
          <h2>Пожалуйста, введите данные о расходах и доходах</h2>
        )}
      </BaseView>
    </>
  );
}
