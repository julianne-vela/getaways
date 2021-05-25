import React, { useState, useEffect } from 'react';
import Loading from '../components/app/Loading';
import Header from '../components/app/Header';
import PlaceList from '../components/places/PlaceList';
import { Container } from '@material-ui/core';
import style from '../styles/Main.css';
import { usePlaces } from '../hooks/usePlaces';

const Getaways = () => {
  const { loading, places } = usePlaces();

  return (
    <>
      <Header />
      <Container className={style.mainContainer} component="main" maxWidth="lg">
        {loading ? <Loading /> : <PlaceList places={places} />}
      </Container>
    </>
  );
};

export default Getaways;
