import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { usePlaces } from '../../hooks/usePlaces';

const PageNavBar = () => {
  const { currentPage, totalPages, handlePageChange } = usePlaces();

  return (
    <Pagination
      /**
       * DEFAULT ARIA:
       * ROLE: navigation
       * ARIA-LABEL: pagination navigation
       */
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      style={{ marginTop: '5px' }}
    />
  );
};

export default PageNavBar;
