import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import AuthPage from '../components/auth/AuthPage';
import Loading from '../components/app/Loading';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <PlaceList places={places} />
      <AuthPage />
    </>
  );
};

export default Getaways;
