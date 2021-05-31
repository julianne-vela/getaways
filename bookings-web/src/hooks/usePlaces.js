import { useState, useEffect, useCallback } from 'react';
import { getPlaces } from '../services/placesApi';

export const usePlaces = (currentPage) => {
  //   simulate random load time between 0-5 sec
  const minTime = Math.random() * 5000;
  const [minTimeElapsed, setMinTimeElapsed] = useState(true);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const handleLoadAnimation = useCallback(() => {
    setMinTimeElapsed(false);
    setTimeout(() => {
      setMinTimeElapsed(true);
    }, minTime);
  }, [setMinTimeElapsed, minTime]);

  useEffect(() => {
    handleLoadAnimation();
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, [currentPage]);

  return {
    loading,
    places,
    minTimeElapsed,
  };
};
