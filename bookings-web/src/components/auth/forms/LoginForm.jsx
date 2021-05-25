import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../../../hooks/useFormStyles';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm = () => {
  const classes = useStyles();
  const { handleSubmit, handleUserUpdate, handleClose, userState } = useAuth();

  return (
    <form className={classes.root} name="login" onSubmit={handleSubmit}>
      <TextField
        label="Email Address"
        type="email"
        name="email"
        variant="filled"
        required
        value={userState.email}
        placeholder="jane@doe.com"
        onChange={handleUserUpdate}
      />
      <TextField
        label="Password"
        variant="filled"
        name="password"
        type="password"
        required
        value={userState.password}
        onChange={handleUserUpdate}
      />
      <span>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" name="login" variant="contained" color="primary">
          Login
        </Button>
      </span>
    </form>
  );
};

export default LoginForm;
