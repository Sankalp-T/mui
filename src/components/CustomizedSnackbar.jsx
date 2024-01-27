import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CustomizedSnackbar = (props) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="filled"
          color={props.type ?? "success"}
          sx={{ width: '100%' }}
        >
          {props.message ?? ""}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomizedSnackbar;