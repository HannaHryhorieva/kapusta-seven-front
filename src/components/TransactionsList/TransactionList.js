import { Button, ButtonGroup, LinearProgress } from '@mui/material';
import React from 'react';

import TransactionItem from './TransactionItem';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';

const buttonGroupStyles = {
  boxShadow: 'none',
  position: 'fixed',
  bottom: 0,
  '& .MuiButtonGroup-grouped': {
    borderRadius: 0,
    borderTop: 'none',
  },
  '& .MuiButtonGroup-grouped:first-of-type': {
    marginRight: '2px',
  },
  '& .MuiButton-root': { color: '#000' },
  '& .MuiButton-root:hover': { backgroundColor: '#FF751D', color: '#fff' },
};

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
      <ButtonGroup
        color="secondary"
        variant="contained"
        fullWidth
        sx={buttonGroupStyles}
      >
        <Button>Доходы</Button>
        <Button>Расходы</Button>
      </ButtonGroup>
    </>
  );
}

export default TransactionList;
