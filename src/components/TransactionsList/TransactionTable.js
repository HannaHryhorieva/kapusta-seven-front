import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress,
} from '@mui/material';
import React, { useState } from 'react';

import TransactionRow from './TransactionRow';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';

function TransactionTable({ type }) {
  const selectorType =
    type === 'expense'
      ? transactionsSelectors.getExpenseTransactions
      : transactionsSelectors.getIncomeTransactions;

  const transactions = useSelector(selectorType);

  const isLoading = useSelector(transactionsSelectors.getTransactionsIsLoading);

  return (
    <>
      {isLoading && <LinearProgress />}
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
            {transactions.map(transaction => (
              <TransactionRow key={transaction._id} transaction={transaction} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionTable;
