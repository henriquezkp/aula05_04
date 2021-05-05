import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { setAlert } from '../../store/modules/alert/actions';

function MyAlert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alert({ type, msg, show }) {
  const classes = useStyles();
  const showAlert = useSelector((state) => state.showAlert);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showAlert);
  }, [showAlert]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setAlert(false));
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MyAlert onClose={handleClose} severity={type}>
          {msg}
        </MyAlert>
      </Snackbar>
    </div>
  );
}
