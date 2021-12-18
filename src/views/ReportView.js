import React, { useEffect, useState } from 'react';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../redux/transaction';
import { useDispatch, useSelector } from 'react-redux';

import BalanceView from './../components/BalanceView/BalanceView';
import BaseView from './BaseView';
import { Box } from '@mui/material';
import BtnGoToMain from '../components/BtnGoToMain/BtnGoToMain';
import CategoriesList from '../components/ReportList/CategoriesList';
import CurrentMonth from '../components/CurrentMonth/CurrentMonth';
import ReportChart from '../components/ReportChart/ReportChart';
import ReportSummary from '../components/ReportSummary/ReportSummary';

export default function ReportPage() {
  const dispatch = useDispatch();
  const { selectedYear, selectedMonth } = useSelector(
    transactionsSelectors.getSelectedDate,
  );
  let date = new Date();
  let todayMonth = date.getMonth() + 1;
  let todayYear = date.getFullYear();
  const [type, setType] = useState('expense');
  const [month, setMonth] = useState(selectedMonth || todayMonth);
  const [year, setYear] = useState(selectedYear || todayYear);

  useEffect(
    () =>
      dispatch(
        transactionsOperations.fetchAllTransactionsByCategory({ month, year }),
      ),
    [dispatch, month, year],
  );

  const transactions = useSelector(
    transactionsSelectors.getTransactionsByCategory,
  );

  // const transactions = {
  //   income: [{ category: { data: [], total: 0 } }],
  //   expense: [{ category: { data: [], total: 0 } }],
  // };

  console.log(transactions);

  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
    }
    if (type === 'income') {
      setType('expense');
    }
  };

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };

  return (
    <>
      <BaseView>
        <Box
          sx={{
            display: 'flex',
            marginTop: '40px',
            marginBottom: '30px',
            alignItems: 'center',
          }}
        >
          <BtnGoToMain />
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
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

        <ReportSummary transactions={transactions} />
        <CategoriesList type={type} onClick={() => onHandleChangeType()} />
        <ReportChart />
      </BaseView>
    </>
  );
}
