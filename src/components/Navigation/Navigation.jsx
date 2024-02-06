import React from "react";
import { selectAuthisLoggedIn } from "../../redux/auth/authSlice.selectors";
import { useSelector } from "react-redux";

import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';


const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthisLoggedIn);

  return (          
    <nav className={styles.nav}>
       <NavLink to="/" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Home</NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Contacts</NavLink>        
      ) : (
        <>
          <NavLink to="/register" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Register</NavLink>
          <NavLink to="/login" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Login</NavLink>
        </>
      )} 
    </nav>
  );
};

export { Navigation };
