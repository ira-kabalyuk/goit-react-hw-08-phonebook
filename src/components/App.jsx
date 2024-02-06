import React, { Suspense, lazy } from 'react';
import '../styles/base.scss';

import { Layout } from './Layout';
import { Error } from './Error';
import { Loader } from './Loader';
import { Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  
  return (
    <Layout>
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<Error>404. Page not found 🤷‍♀️</Error>} />
        </Routes>
      </Suspense>
    </Layout>
  );
};


export { App };