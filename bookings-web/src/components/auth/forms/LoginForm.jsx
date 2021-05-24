import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../../../hooks/useStyles';

const LoginForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={props.handleLogin}>
      <TextField
        label="Email Address"
        type="email"
        variant="filled"
        required
        placeholder="jane@doe.com"
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <span>
        <Button variant="contained" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </span>
    </form>
  );
};

export default LoginForm;
