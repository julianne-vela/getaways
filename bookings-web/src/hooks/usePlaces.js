import { useState, useEffect, useCallback } from 'react';
import { getPlaces } from '../services/placesApi';

export const usePlaces = () => {
  //   simulate random load time between 0-5 sec
  const minTime = Math.random() * 5000;
  const [loadAnimation, setLoadAnimation] = useState(true);
  const [loading, setLoading] = useState(true);
  const [placesArray, setPlacesArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(15);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePerPage = ({ target: { value } }) => {
    setPerPage(value);
  };

  const handleLoadAnimation = useCallback(() => {
    setLoadAnimation(false);
    setTimeout(() => {
      setLoadAnimation(true);
    }, minTime);
  }, [loadAnimation, minTime]);

  useEffect(() => {
    handleLoadAnimation();
    setLoading(true);
    getPlaces(currentPage, perPage)
      .then(({ placesArray, totalPages }) => {
        setPlacesArray(placesArray);
        setTotalPages(totalPages);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  return {
    loading,
    loadAnimation,
    placesArray,
    currentPage,
    totalPages,
    perPage,
    handlePerPage,
    handlePageChange,
  };
};
