import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Header from './Header';
import { useAuth } from '../../hooks/useAuth';

export default function App() {
  const auth = useAuth();
  return (
    <>
      <CssBaseline />
      <Header {...auth} />
      <Switch>
        {/* open routes */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/places" />
        <Route exact path="/places/:id" />

        {/* protected routes  */}
        <Route exact path="/bookings" />
        <Route exact path="/bookings" />
      </Switch>
    </>
  );
}
