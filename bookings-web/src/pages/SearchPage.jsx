import React from 'react';
import { Grid } from '@material-ui/core';
import PlaceList from '../components/places/PlaceList';
import PageNavBar from '../components/controls/Pagination';
import Search from '../components/controls/Search';
import Filter from '../components/controls/Filter';
import { usePlaces } from '../hooks/usePlaces';

const SearchPage = () => {
  const props = usePlaces();
  return (
    <Grid component="main" container>
      <Grid component="aside" container item className="pageNav">
        <PageNavBar {...props} />
      </Grid>
      <Grid
        component="aside"
        container
        item
        className="sideBar"
        aria-label="sidebar controls"
      >
        <Search {...props} />
        <Filter {...props} />
      </Grid>
      <Grid component="section" container item className="displayList">
        <PlaceList {...props} />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
