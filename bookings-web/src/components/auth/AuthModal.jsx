import React from 'react';
import { Dialog } from '@material-ui/core';
import AuthTabs from './tabs/AuthTabs';

function AuthModal(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="authentication-form"
      aria-describedby="user signup and login modal"
    >
      <AuthTabs
        {...props}
        // value={value}
        // handleChange={handleChange}
        // handleLogin={handleLogin}
        // handleSignUp={handleSignUp}
        // onClick={handleClose}
      />
    </Dialog>
  );
}

export default AuthModal;
