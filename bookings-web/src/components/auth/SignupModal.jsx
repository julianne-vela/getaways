import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';

const SignupModal = ({ open, handleClose, handleSignUp }) => {
  return (
    <Dialog open={open} handleClose={handleClose}>
      <SignupForm handleSignUp={handleSignUp} />
    </Dialog>
  );
};

SignupModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SignupModal;
