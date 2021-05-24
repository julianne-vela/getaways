import React from 'react';
import LoginModal from '../auth/LoginModal';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import SignupModal from '../auth/SignupModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolbar: {
    alignSelf: 'flex-end',
    padding: theme.spacing(1),
  },
  button: {
    margin: '3px',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({
  handleOpen,
  handleClose,
  handleLogin,
  //   handleSignUp,
  open,
}) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Typography variant="h4" className={classes.title}>
        Getaways
      </Typography>
      <Toolbar component="nav" className={classes.toolbar}>
        <Button
          className={classes.button}
          onClick={handleOpen}
          variant="contained"
          value="login"
          color="default"
        >
          Login
        </Button>
        <LoginModal
          id="login"
          open={open}
          onClose={handleClose}
          handleLogin={handleLogin}
        />
        {/* <SignupModal
          open={open}
          handleClose={handleClose}
          handleSignUp={handleSignUp}
        /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
