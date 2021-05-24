import React from 'react';
import { Button, TextField, Link } from '@material-ui/core';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from '../../hooks/useStyles';

const LoginForm = ({ handleLogin, onClose, open }) => {
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
          Submit
        </Button>
      </span>
      <span>
        Don't have an account?
        <Router>
          <Link component={RouterLink} to="/signup">
            {' '}
            Sign up!
          </Link>
        </Router>
      </span>
    </form>
  );
};

export default LoginForm;
