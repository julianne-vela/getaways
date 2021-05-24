import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const LoginModal = ({ open, onClose, handleLogin }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <LoginForm handleLogin={handleLogin} />
    </Dialog>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
