import React from 'react';
import Loading from '../components/app/Loading';
import PlaceList from '../components/places/PlaceList';
import { Container } from '@material-ui/core';
import { usePlaces } from '../hooks/usePlaces';
import style from '../styles/Main.css';

const Getaways = () => {
  const { loading, places } = usePlaces();

  return (
    <Container className={style.mainContainer} component="main" maxWidth="lg">
      {loading ? <Loading /> : <PlaceList places={places} />}
    </Container>
  );
};

export default Getaways;
