import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tab, Typography } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AuthTabs = ({ value, handleChange, handleLogin, handleSignUp }) => {
  const classes = useStyles();

  const a11yProps = (idx) => {
    return {
      id: `auth-tab-${idx}`,
      'aria-controls': `auth-tabpanel-${idx}`,
    };
  };

  return (
    <TabContext className={classes.root} value={value}>
      <TabList onChange={handleChange} aria-label="authentication-tabs">
        <Tab label="Login" value="login" {...a11yProps(1)} />
        <Tab label="Sign Up" value="signup" {...a11yProps(2)} />
      </TabList>

      <TabPanel value="login" idx={1}>
        <Typography>
          Login to your account to access your reservations.
        </Typography>
        <LoginForm handleLogin={handleLogin} />
      </TabPanel>

      <TabPanel value="signup" idx={2}>
        <Typography>Create an account below to get started!</Typography>
        <SignupForm handleSignUp={handleSignUp} />
      </TabPanel>
    </TabContext>
  );
};

AuthTabs.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AuthTabs;
