import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PlaceList from '../components/places/PlaceList';
import PageNavBar from '../components/controls/Pagination';
import Search from '../components/controls/Search';
import Filter from '../components/controls/Filter';
import { usePlaces } from '../hooks/usePlaces';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SearchPage = () => {
  const props = usePlaces();
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid
        component="section"
        direction="column"
        alignItems="center"
        justify="center"
        container
        spacing={3}
      >
        <Grid component="aside" item xs={12} aria-label="page navigation">
          <PageNavBar className={classes.paper} />
        </Grid>

        <Grid item component="aside" aria-label="sidebar controls" xs={4}>
          <Search className={classes.paper} {...props} />
          <Filter className={classes.paper} {...props} />
        </Grid>
        <Grid
          item
          component="section"
          className={classes.paper}
          aria-label="places list"
          xs={8}
        >
          <PlaceList className={classes.paper} {...props} />
        </Grid>
      </Grid>
    </main>
  );
};

export default SearchPage;
