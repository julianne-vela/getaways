import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import AuthModal from '../auth/AuthModal';

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

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Typography variant="h4" className={classes.title}>
        Getaways
      </Typography>

      <Toolbar component="nav" className={classes.toolbar}>
        <Button
          className={classes.button}
          onClick={props.handleOpen}
          variant="contained"
          value="login"
          color="default"
        >
          Login
        </Button>

        <AuthModal
          {...props}
          //   open={open}
          //   value={value}
          //   onClose={handleClose}
          //   handleChange={handleChange}
          //   handleLogin={handleLogin}
          //   handleSignUp={handleSignUp}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
