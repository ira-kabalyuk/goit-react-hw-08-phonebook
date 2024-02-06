import React from "react";

import styles from './Register.module.scss';
import { Section } from "components/Section";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/authSlice";


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
  
  return (
    <Section>
      <h1>Register page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Name:
          <input type="text" id="username" name='userName' placeholder='Your name' minLength={2} required />
        </label>
        <label htmlFor="useremail">Email:
          <input type="email" id="useremail" name='userEmail' placeholder='Your email' required />
        </label>
        <label htmlFor="userpassword">Password:
          <input type="password" id="userpassword" name='userPassword' placeholder='Your password' minLength={7} required />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </Section>
  );
};

export default Register;