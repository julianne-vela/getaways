import React, { useState, useEffect } from 'react';
import Loading from '../components/app/Loading';
import Header from '../components/app/Header';
import { getPlaces } from '../services/placesApi';
import { loginUser, signupUser } from '../services/authApi';
import PlaceList from '../components/places/PlaceList';
import { Container } from '@material-ui/core';
import style from '../styles/Main.css';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    console.log(email, password);
    await loginUser(email, password);
    handleClose();
  };

  const handleSignUp = async () => {
    // e.preventDefault();
    console.log(firstName, lastName, email, password);
    await signupUser(firstName, lastName, email, password);
    handleClose();
  };

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header
        open={open}
        value={value}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        handleChange={handleChange}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <Container className={style.mainContainer} component="main" maxWidth="lg">
        {loading ? <Loading /> : <PlaceList places={places} />}
      </Container>
    </>
  );
};

export default Getaways;
