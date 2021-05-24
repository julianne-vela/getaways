import React, { useState, useEffect } from 'react';
import Loading from '../components/app/Loading';
import Header from '../components/app/Header';
import { getPlaces } from '../services/placesApi';
import { loginUser, signupUser } from '../services/authApi';
import PlaceList from '../components/places/PlaceList';
import { Container } from '@material-ui/core';
import style from '../styles/Main.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogin = async (email, password) => {
    await loginUser(email, password);
  };

  const handleSignUp = async (firstName, lastName, email, password) => {
    await signupUser(firstName, lastName, email, password);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
      />
      <Container className={style.mainContainer} component="main" maxWidth="lg">
        {loading ? <Loading /> : <PlaceList places={places} />}
      </Container>
    </>
  );
};

export default Getaways;
