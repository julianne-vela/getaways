import React from 'react';
import Loading from '../components/app/LoadSkeleton';
import PlaceList from '../components/places/PlaceList';
import { usePlaces } from '../hooks/usePlaces';
import { Container } from '@material-ui/core';
import base from '../styles/main.css';
import search from '../styles/search.css';

const HomePage = () => {
  const { loading, places } = usePlaces();

  if (loading) return <Loading loading={loading} places={places} />;
  return (
    <Container className={base.mainContainer} component="main" maxWidth="lg">
      <aside className={search.controls}>Search Controls</aside>
      <section>
        <PlaceList places={places} />
      </section>
    </Container>
  );
};

export default HomePage;
