import React from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from '../../../hooks/useFormStyles';
import { useAuth } from '../../../hooks/useAuth';

const SignupForm = () => {
  const classes = useStyles();
  const { handleSubmit, handleUserUpdate, handleClose, userState } = useAuth();

  return (
    <form className={classes.root} name="signup" onSubmit={handleSubmit}>
      <TextField
        label="Email Address"
        type="email"
        name="email"
        variant="filled"
        required
        value={userState.email}
        onChange={handleUserUpdate}
        placeholder="jane@doe.com"
      />

      <TextField label="Password" variant="filled" type="password" required />

      <TextField
        label="Confirm Password"
        type="password"
        variant="filled"
        name="password"
        required
        value={userState.password}
        onChange={handleUserUpdate}
      />

      <span>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" name="signup" variant="contained" color="primary">
          Sign Up
        </Button>
      </span>
    </form>
  );
};

export default SignupForm;
