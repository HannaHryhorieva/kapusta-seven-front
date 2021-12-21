import s from './Summary.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getToken } from '../../redux/login/auth-selectors';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transaction';

import monthWord from './monthWord';

const Summary = ({ value }) => {
  const dispatch = useDispatch();

  const date = useSelector(transactionsSelectors.getSelectedDate);
  const year = date.year;
  useEffect(
    () => dispatch(transactionsOperations.fetchTransactionsSummaryByYear(year)),
    [dispatch, year],
  );

  const transactionsByYear = useSelector(
    transactionsSelectors.getSummaryByYear,
  );
  let summary = {};
  // const summaryByYear = transactionsByYear['data'];
  if (transactionsByYear) {
    switch (value) {
      case 'expense':
        summary = transactionsByYear['expense'];
        break;
      case 'income':
        summary = transactionsByYear['income'];
        break;
      default:
        summary = {};
    }
  }

  let arrSummary = [];
  for (const key in summary) {
    const total = Math.round(summary[`${key}`]['total'] * 100) / 100;
    arrSummary.push({
      month: monthWord(key),
      total,
      id: +key,
    });
  }
  arrSummary = arrSummary.sort((a, b) => b.id - a.id);
  if (arrSummary.length > 6) {
    arrSummary = arrSummary.slice(0, 6);
  }
  return (
    <div className={s.summaryBox}>
      <h3 className={s.title}>сводка</h3>
      {arrSummary.length > 0 && (
        <ul>
          {arrSummary.map(item => (
            <li key={item.id} className={s.item}>
              <div className={s.itemBox}>
                <p className={s.itemMonth}>{item.month}</p>
                <p className={s.itemTotal}>{item.total}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Summary;
