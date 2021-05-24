import React from 'react';
import LoginModal from '../auth/LoginModal';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Header({ handleOpen, handleClose, open }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Getaways</Typography>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            Login
          </Button>
          <LoginModal open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
      {/* <TabDrawer open={open} handleDrawerChange={handleDrawerClose} /> */}
    </>
  );
}

export default Header;
