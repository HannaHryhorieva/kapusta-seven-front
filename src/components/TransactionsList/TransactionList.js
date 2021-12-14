import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';

import TransactionItem from './TransactionItem';
import transactionsFromFile from './transactions.json';

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

function TransactionList() {
  const [transactions, setTransactions] = useState(transactionsFromFile);

  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          backgroundColor: '#fff',
          marginBottom: '40px', //height of bottom buttons
        }}
      >
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
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
