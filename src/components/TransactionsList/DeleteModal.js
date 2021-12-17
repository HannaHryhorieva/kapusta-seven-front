import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transaction';

function DeleteModal({ isOpen = true, transactionId, onClose }) {
  const dispatch = useDispatch();

  function submitHandler() {
    dispatch(transactionsOperations.fetchDeleteTransaction(transactionId));
    onClose();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{ '& .MuiDialog-paper': { borderRadius: '30px' } }}
    >
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '50px 60px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography fontWeight={500}>Вы уверены?</Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ marginTop: '20px', marginRight: '15px' }}
          onClick={submitHandler}
        >
          Да
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          sx={{ marginTop: '20px' }}
          onClick={onClose}
        >
          Нет
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
