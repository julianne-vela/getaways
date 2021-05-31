import React from 'react';
import PlaceList from '../components/places/PlaceList';
import { Grid, makeStyles } from '@material-ui/core';
import { usePlaces } from '../hooks/usePlaces';
import SearchControls from '../components/places/controls/SearchControls';
import { usePagination } from '../hooks/usePagination';

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
    <Grid
      container
      className={classes.root}
      component="main"
      maxWidth="lg"
      spacing={1}
    >
      <Grid container item component="section">
        <PlaceList {...props} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
