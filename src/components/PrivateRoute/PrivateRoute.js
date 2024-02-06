import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthisLoggedIn } from '../../redux/auth/authSlice.selectors';


const PrivateRoute = ({children, redirectTo = '/login'}) => {
  const isLoggedIn = useSelector(selectAuthisLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace /> ;  
};

export { PrivateRoute };