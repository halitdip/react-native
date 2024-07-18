import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../redux/userSlice';

const handleError = () => {
  const dispatch = useDispatch();
  dispatch(setLogout());
};

export default handleError;