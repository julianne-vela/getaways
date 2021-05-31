import React from 'react';
import { Grid } from '@material-ui/core';
import SearchControls from '../components/places/SearchControls';
import PlaceList from '../components/places/PlaceList';
import Pagination from '../components/controls/Pagination';
import Search from '../components/controls/Search';
import Filter from '../components/controls/Filter';

const SearchPage = () => {
  return (
    <Grid component="main" container>
      <Grid component="aside" container list className="pageNav">
        <Pagination />
      </Grid>
      <Grid
        component="aside"
        container
        item
        className="sideBar"
        aria-label="sidebar controls"
      >
        <Search />
        <Filter />
      </Grid>
      <Grid component="section" container list className="displayList">
        <PlaceList container item />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
