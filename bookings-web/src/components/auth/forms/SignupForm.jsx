import React from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from '../../../hooks/useStyles';

const SignupForm = ({ handleSignUp }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSignUp}>
      <TextField
        label="First Name"
        type="text"
        variant="filled"
        required
        placeholder="Jane"
      />
      <TextField
        label="Last Name"
        type="text"
        variant="filled"
        required
        placeholder="Doe"
      />
      <TextField
        label="Email Address"
        type="email"
        variant="filled"
        required
        placeholder="jane@doe.com"
      />
      <TextField label="Password" variant="filled" type="password" required />
      <TextField
        label="Confirm Password"
        type="password"
        variant="filled"
        required
      />
      <span>
        <Button variant="contained">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </span>
    </form>
  );
};

export default SignupForm;
