import { IconButton, TableCell, TableRow, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';
import React from 'react';

function TransactionRow({ transaction }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  const amount = formatter.format(transaction.amount);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{transaction.date}</TableCell>
      <TableCell align="left">{transaction.description}</TableCell>
      <TableCell align="center">{transaction.category}</TableCell>
      <TableCell align="center">
        {transaction.isExpense ? (
          <Typography color="#E7192E" fontWeight="700">
            - {amount}
          </Typography>
        ) : (
          <Typography color="#407946" fontWeight="700">
            {amount}
          </Typography>
        )}
      </TableCell>
      <TableCell align="center" sx={{ width: 110 }}>
        <IconButton aria-label="Удалить транзакцию">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TransactionRow;
