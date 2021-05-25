import { useState } from 'react';
import { loginUser, signupUser } from '../services/authApi';

export const useAuth = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userState, setUserState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = e.target;

    // Checks which form is being submitted, and uses associated API call
    if (name === 'signup') {
      await signupUser(userState);
    } else if (name === 'login') {
      await loginUser(userState);
    } else {
      // handleLogout
      console.log('Logged out successfully!');
    }
    handleClose();
    setIsLoggedIn(!isLoggedIn);
  };

  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleUserUpdate = (e) =>
    setUserState({
      ...userState,
      [e.target.name]: [e.target.value][0],
    });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    userState,
    value,
    open,
    isLoggedIn,
    handleSubmit,
    handleUserUpdate,
    handleTabChange,
    handleOpen,
    handleClose,
  };
};
