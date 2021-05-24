import React, { useState } from 'react';
import TabDrawer from '../auth/tabs/TabDrawer';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Getaways</Typography>

          <a>Home</a>
          <span>
            <a>Login</a>
            <a>Logout</a>
            <a>Register</a>
          </span>
        </Toolbar>
      </AppBar>
      {/* <TabDrawer open={open} handleDrawerChange={handleDrawerClose} /> */}
    </>
  );
}

export default Header;
