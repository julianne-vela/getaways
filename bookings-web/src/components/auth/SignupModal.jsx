import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';

const SignupModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <SignupForm />
    </Dialog>
  );
};

SignupModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
