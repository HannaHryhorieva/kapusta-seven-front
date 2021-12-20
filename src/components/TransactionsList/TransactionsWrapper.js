import React, { useEffect, useState } from 'react';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transaction';
import { useDispatch, useSelector } from 'react-redux';

import DeleteModal from './DeleteModal';
import TransactionList from './TransactionList';
import TransactionTabs from './TransactionTabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getAllTransactions);

  const month = useSelector(transactionsSelectors.getSelectedMonth);
  const year = useSelector(transactionsSelectors.getSelectedYear);

  useEffect(() => {
    dispatch(
      transactionsOperations.fetchAllTransactionsByMonth({ month, year }),
    );
  }, [dispatch, month, year]);

  function showModal(transactionId) {
    setIsModalOpen(true);
    setSelectedTransaction(transactionId);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        transactionId={selectedTransaction}
      />
      {isMobile ? (
        <TransactionList
          deleteDialogHandler={showModal}
          transactions={transactions}
        />
      ) : (
        <TransactionTabs
          deleteDialogHandler={showModal}
          transactions={transactions}
        />
      )}
    </>
  );
}

export default TransactionsWrapper;
