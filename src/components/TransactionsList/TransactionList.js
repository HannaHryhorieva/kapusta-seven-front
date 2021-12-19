import { Button, ButtonGroup, LinearProgress } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';
import TransactionItem from './TransactionItem';
import TransactionsButtons from './TransactionsButtons';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';

function TransactionList({ deleteDialogHandler }) {
  const transactions = useSelector(transactionsSelectors.getAllTransactions);

  const isLoading = useSelector(transactionsSelectors.getTransactionsIsLoading);

  return (
    <>
      {isLoading && <LinearProgress />}
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          backgroundColor: '#fff',
          marginBottom: '40px', //height of bottom buttons
        }}
      >
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction._id}
            transaction={transaction}
            deleteDialogHandler={deleteDialogHandler}
          />
        ))}
      </ul>
      <TransactionsButtons />
    </>
  );
}

export default TransactionList;
