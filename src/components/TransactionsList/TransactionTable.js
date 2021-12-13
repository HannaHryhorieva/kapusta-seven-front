import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import TransactionRow from './TransactionRow';
import transactionsFromFile from './transactions.json';

function TransactionTable({ type }) {
  const [transactions, setTransactions] = useState(transactionsFromFile);

  const isExpense = type === 'expense';

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="button">Дата</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="button">Описание</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button">Категория</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button">Сумма</Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: 110 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions
            .filter(item => item.isExpense === isExpense)
            .map(transaction => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
