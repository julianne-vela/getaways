import { useState } from 'react';

export const usePagination = (places) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  const totalPages = perPage * places.length;

  const handlePerPage = ({ target: { value } }) => {
    setPerPage(value);
  };

  const handlePageChange = ({ target: { name, value } }) => {
    setCurrentPage({
      [name]: [value],
    });
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
    handlePerPage,
  };
};
