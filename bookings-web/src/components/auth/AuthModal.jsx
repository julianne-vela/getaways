import React from 'react';
import {
  makeStyles,
  Container,
  Tab,
  Button,
  Typography,
  Dialog,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: '3px',
  },
}));

const AuthModal = () => {
  const classes = useStyles();
  const {
    open,
    value,
    username,
    isLoggedIn,
    handleOpen,
    handleSubmit,
    handleTabChange,
  } = useAuth();

  const a11yProps = (idx) => {
    return {
      id: `auth-tab-${idx}`,
      'aria-controls': `auth-tabpanel-${idx}`,
    };
  };

  return (
    <Container component="section">
      {isLoggedIn ? (
        <>
          {console.log('is logged in')}
          <Typography>Welcome, ${username}!</Typography>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            variant="contained"
            name="logout"
            color="secondary"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            className={classes.button}
            onClick={handleOpen}
            variant="contained"
            value="login"
            color="default"
          >
            Login/Sign-up
          </Button>
          {/* <Link to="/myaccount"> */}
          <Dialog
            open={open}
            aria-labelledby="authentication-form"
            aria-describedby="user signup and login modal"
          >
            <TabContext className={classes.root} value={value}>
              <TabList
                onChange={handleTabChange}
                aria-label="authentication-tabs"
              >
                <Tab label="Login" value="login" {...a11yProps(1)} />
                <Tab label="Sign Up" value="signup" {...a11yProps(2)} />
              </TabList>

              <TabPanel value="login" idx={1}>
                <Typography>
                  Login to your account to access your reservations.
                </Typography>
                <LoginForm />
              </TabPanel>

              <TabPanel value="signup" idx={2}>
                <Typography>Create an account below to get started!</Typography>
                <SignupForm />
              </TabPanel>
            </TabContext>
          </Dialog>
          {/* </Link> */}
        </>
      )}
    </Container>
  );
};

export default AuthModal;
