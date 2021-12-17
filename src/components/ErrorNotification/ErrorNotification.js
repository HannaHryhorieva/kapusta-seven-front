import { Snackbar, IconButton, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';

import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';

export default function ErrorNotification({ action, message }) {
  const dispatch = useDispatch();

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(action());
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open
        autoHideDuration={3000}
        onClose={handleErrorClose}
      >
        <Alert
          severity="error"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleErrorClose}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
