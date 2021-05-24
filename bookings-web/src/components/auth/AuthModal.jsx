import React from 'react';
import { Dialog } from '@material-ui/core';
import AuthTabs from './tabs/AuthTabs';

function AuthModal({
  open,
  value,
  handleChange,
  handleClose,
  handleLogin,
  handleSignUp,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="authentication-form"
      aria-describedby="user signup and login modal"
    >
      <AuthTabs
        value={value}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
      />
    </Dialog>
  );
}

export default AuthModal;
