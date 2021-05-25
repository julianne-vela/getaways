import React from 'react';
import { AppBar, Typography, makeStyles } from '@material-ui/core';
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

const Header = () => {
  const classes = useStyles();
  //   const { handleOpen, handleSubmit, isLoggedIn, name } = useAuth();

  return (
    <AppBar className={classes.root} position="static">
      <Typography variant="h4" className={classes.title}>
        Getaways
      </Typography>

      {/* {isLoggedIn ? (
        <Box>
          <Typography>Welcome, ${name}!</Typography>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            variant="contained"
            name="logout"
            color="secondary"
          >
            Logout
          </Button>
        </Box>
      ) : ( */}
      <AuthModal />
      {/* //   )} */}
    </AppBar>
  );
};

export default Header;
