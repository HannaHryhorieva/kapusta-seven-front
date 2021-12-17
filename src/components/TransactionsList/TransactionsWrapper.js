import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TransactionList from './TransactionList';
import TransactionTabs from './TransactionTabs';
import DeleteModal from './DeleteModal';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transaction';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getAllTransactions);
  const selectedDate = useSelector(transactionsSelectors.getSelectedDate);

  useEffect(() => {
    dispatch(transactionsOperations.fetchAllTransactionsByMonth(selectedDate));
  }, [dispatch, selectedDate]);

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
