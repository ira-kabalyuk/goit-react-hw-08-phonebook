
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';
import { Section } from 'components/Section';

import styles from './Login.module.scss';


const Login = () => {
  
   const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;    
    
    const FormData = {
      email,
      password,
    }

    dispatch(apiLoginUser(FormData))
  }
  
  return (
    <Section>
      <h1>Login page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="useremail">Email:
          <input type="email" id="useremail" name='userEmail' placeholder='Your email' required />
        </label>
        <label htmlFor="userpassword">Password:
          <input type="password" id="userpassword" name='userPassword' placeholder='Your password' minLength={7} required />
        </label>        
        <button type='submit'>Sign In</button>
      </form>
    </Section>
  );
};

export default Login;