import React from 'react';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

function SearchControls({
  handlePerPage,
  handlePageChange,
  totalPages,
  currentPage,
}) {
  return (
    <>
      <Typography>Results per Page: </Typography>
      <section className="pagination">
        {/* pagination and perPage */}
        <select name="perPage" onChange={handlePerPage}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
          <option>View All</option>
        </select>
        <Typography>
          Page: {currentPage}/{totalPages}
        </Typography>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="secondary"
          showFirstButton
          showLastButton
        />
      </section>
      <Typography>Search available locations: </Typography>
      <section className="querySearch">{/* input search area */}</section>
      <Typography>Filter by Amenities</Typography>
      <section>{/* amenitites filter */}</section>
    </>
  );
}

export default SearchControls;
