import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import SignupModal from '../auth/SignupModal';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Getaways} />
        <Route exact path="/signup" component={SignupModal} />
      </Switch>
    </>
  );
}
