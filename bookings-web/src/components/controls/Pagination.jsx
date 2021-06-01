import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';

const PageNavBar = (totalPages, currentPage, handlePageChange) => {
  return (
    <MemoryRouter initialEntries={['/search']} initialIndex={0}>
      <Route>
        <Pagination
          /**
           * DEFAULT ARIA:
           * ROLE: navigation
           * ARIA-LABEL: pagination navigation
           */
          page={Number(`${currentPage}`)}
          count={Number(`${totalPages}`)}
          hideNextButton={currentPage === totalPages - 1}
          hidePrevButton={currentPage === 1}
          onChange={handlePageChange}
          renderItem={(item) => {
            <PaginationItem
              component={Link}
              to={`/search${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />;
          }}
        />
      </Route>
    </MemoryRouter>
  );
};

export default PageNavBar;
