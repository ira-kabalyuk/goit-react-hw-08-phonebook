import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthisLoggedIn } from '../../redux/auth/authSlice.selectors';


const RestrictedRoute = ({children}) => {
  const isLoggedIn = useSelector(selectAuthisLoggedIn);

  return isLoggedIn ? <Navigate to='/contacts' replace /> : children;  
};

export { RestrictedRoute };