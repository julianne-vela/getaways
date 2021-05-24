import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../../../hooks/useStyles';

const LoginForm = ({ handleLogin }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={handleLogin}>
      <TextField
        label="Email Address"
        type="email"
        variant="filled"
        required
        placeholder="jane@doe.com"
      />
      <TextField label="Password" variant="filled" type="password" required />
      <span>
        <Button variant="contained">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </span>
    </form>
  );
};

export default LoginForm;
