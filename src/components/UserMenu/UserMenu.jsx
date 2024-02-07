import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import { selectAuthIsLoading, selectAuthUserData } from '../../redux/auth/authSlice.selectors';

import styles from './UserMenu.module.scss';
import { Button } from 'components/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";

  return (      
    <div className={styles.block}>
      <p className={styles.user}>{userEmail}</p>
      <Button onClick={handleLogOut} disabled={isLoading} text='Logout' />
    </div>    
  );
};

export { UserMenu };