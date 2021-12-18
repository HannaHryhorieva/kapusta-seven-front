import s from './Summary.module.css';
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   transactionsOperations,
//   transactionsSelectors,
// } from '../../redux/transaction';

import monthWord from './monthWord';

const data = {
  income: {
    11: {
      total: 1000,
    },
    12: {
      total: 1000,
    },
  },
  expense: {
    2: {
      total: 16,
    },
    3: {
      total: 235,
    },
    4: {
      total: 555,
    },
    5: {
      total: 4587,
    },
    6: {
      total: 3254,
    },
    7: {
      total: 2344,
    },
    11: {
      total: 416.1,
    },
    12: {
      total: 224.86999999999998,
    },
  },
};

const Summary = ({ value }) => {
  // const dispatch = useDispatch();
  // const transactionsByYear = useSelector(
  //   transactionsSelectors.getSummaryByYear,
  // );
  // const date = useSelector(transactionsSelectors.getSelectedDate);
  // const year = date.year;
  // useEffect(
  //   () => dispatch(transactionsOperations.fetchTransactionsSummaryByYear(year)),
  //   [dispatch, year],
  // );

  let summary = {};
  switch (value) {
    case 'expense':
      summary = data.expense;
      break;
    case 'income':
      summary = data.income;
      break;
    default:
      console.log('Invalid subscription type');
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
