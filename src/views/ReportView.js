import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  transactionsSelectors,
  transactionsOperations,
} from '../redux/transaction';
import CategoriesList from '../components/ReportList/CategoriesList';
import ReportChart from '../components/ReportChart/ReportChart';
import CurrentMonth from '../components/CurrentMonth/CurrentMonth';
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

  // useEffect(() =>
  // dispatch(transactionsOperations.fetchAllTransactionsByCategory(year, month)),
  // [dispatch, month, year]);

  // const transactions = useSelector(transactionsSelectors.getTransactionsByCategory);

  const transactions = {
    income: { category: { data: [], total: 0 } },
    expense: { category: { data: [], total: 0 } },
  };

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
    <div>
      <CurrentMonth
        year={year}
        month={month}
        onHandleClickLeft={onHandleClickLeft}
        onHandleClickRight={onHandleClickRight}
      />
      <ReportSummary transactions={transactions} />
      <CategoriesList type={type} onClick={() => onHandleChangeType()} />
      <ReportChart />
    </div>
  );
}
