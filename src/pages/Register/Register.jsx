import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/authSlice";
import { selectAuthErrorCode } from "../../redux/auth/authSlice.selectors";
import { Title } from "components/Title";

import styles from './Register.module.scss';
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Section } from "components/Section";


const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;
    
    const FormData = {
      name,
      email,
      password,
    }

    dispatch(apiRegisterUser(FormData))
  }

  const error = useSelector(selectAuthErrorCode);
  
  return (
    <Section>
      <Title text='Register'></Title>     
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label='Enter your name'
          type="text"
          id="username"
          name='userName'
          placeholder='Your name'
          minLength={2}
          required
          htmlFor="username"
        />          
        <Input
          label='Enter your e-mail'
          type="email"
          id="useremail"
          name='userEmail'
          placeholder='Your email'
          required
          htmlFor="useremail"
          hasError={error}
        />      
        <Input
          label='Enter your password'
          type="password"
          id="userpassword"
          name='userPassword'
          placeholder='Your password'
          minLength={7}
          required
          htmlFor="userpassword"
          hasError={error}
        />     
        <Button type='submit' text='Sign Up' />
      </form>
    </Section>
  );
};

export default Register;