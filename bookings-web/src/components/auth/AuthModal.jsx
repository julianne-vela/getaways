import React from 'react';
import { Button, Dialog, makeStyles } from '@material-ui/core';
import AuthTabs from './tabs/AuthTabs';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '3px',
  },
}));

function AuthModal() {
  const classes = useStyles();
  const { open, handleOpen, handleClose } = useAuth();

  return (
    <>
      <Button
        className={classes.button}
        onClick={handleOpen}
        variant="contained"
        value="login"
        color="default"
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="authentication-form"
        aria-describedby="user signup and login modal"
      >
        <AuthTabs />
      </Dialog>
    </>
  );
}

export default AuthModal;
