import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from '../redux/auth/authSlice';

import { Layout } from './Layout';
import { Error } from './Error';
import { Loader } from './Loader';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import '../styles/base.scss';


const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(apiRefreshUser())
  }, [dispatch]);
  
  return (
    <Layout>
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }>
          </Route>
          <Route path="/login" element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
            }>
          </Route>
          <Route path="/contacts" element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
            }>
          </Route>
          <Route path="*" element={<Error>404. Page not found 🤷‍♀️</Error>} />
        </Routes>
      </Suspense>
    </Layout>
  );
};


export { App };