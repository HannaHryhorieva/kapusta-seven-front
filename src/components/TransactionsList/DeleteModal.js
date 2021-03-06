import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';

import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import React from 'react';
import { transactionsOperations } from '../../redux/transaction';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

function DeleteModal({ isOpen = true, transactionId, onClose, transactions }) {
  const dispatch = useDispatch();
  const isNarrowMobile = useMediaQuery('(max-width:435px)');

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
          sx={
            isNarrowMobile
              ? { marginTop: '20px' }
              : { marginTop: '20px', marginRight: '15px' }
          }
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
