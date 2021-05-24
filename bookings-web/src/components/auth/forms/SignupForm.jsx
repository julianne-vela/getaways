import React from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from '../../../hooks/useStyles';

const SignupForm = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={props.handleSignUp}>
      <TextField
        label="First Name"
        type="text"
        variant="filled"
        required
        onChange={(e) => props.setFirstName(e.target.value)}
        placeholder="Jane"
      />

      <TextField
        label="Last Name"
        type="text"
        variant="filled"
        required
        onChange={(e) => props.setLastName(e.target.value)}
        placeholder="Doe"
      />

      <TextField
        label="Email Address"
        type="email"
        variant="filled"
        required
        onChange={(e) => props.setEmail(e.target.value)}
        placeholder="jane@doe.com"
      />

      <TextField label="Password" variant="filled" type="password" required />
      <TextField
        label="Confirm Password"
        type="password"
        variant="filled"
        required
        onChange={(e) => props.setPassword(e.target.value)}
      />

      <span>
        <Button variant="contained" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </span>
    </form>
  );
};

export default SignupForm;
