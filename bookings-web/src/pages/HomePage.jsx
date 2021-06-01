import React from 'react';
import PlaceList from '../components/places/PlaceList';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} component="main">
      HomePage Placeholder
    </Grid>
  );
};

export default HomePage;
