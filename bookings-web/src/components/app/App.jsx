import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import Header from './Header';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path="/" component={Getaways} />
      </Switch>
    </>
  );
}
