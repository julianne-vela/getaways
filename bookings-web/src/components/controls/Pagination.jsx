import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';

function Pagination() {
  return (
    <MemoryRouter initialEntries={['/search']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || 1, 10);
          return (
            <Pagination
              /**
               * DEFAULT ARIA:
               * ROLE: navigation
               * ARIA-LABEL: pagination navigation
               */
              page={page}
              count={10}
              renderItem={(item) => {
                <PaginationItem
                  component={Link}
                  to={`/search${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />;
              }}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}

export default Pagination;
