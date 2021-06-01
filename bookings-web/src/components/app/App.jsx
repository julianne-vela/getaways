import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import { useAuth } from '../../hooks/useAuth';
import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';
import PlaceDetail from '../../pages/PlaceDetail';
import BookingPage from '../../pages/BookingPage';

export default function App() {
  const auth = useAuth();
  return (
    <>
      <CssBaseline />
      <Header {...auth} />

      <Switch>
        {/* open routes */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/search/places/:id" component={PlaceDetail} />

        {/* protected routes  */}
        <Route exact path="/bookings" component={BookingPage} />
        <Route exact path="/bookings/cancel" />
      </Switch>
    </>
  );
}
