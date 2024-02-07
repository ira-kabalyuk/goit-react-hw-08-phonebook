
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';
import { Section } from 'components/Section';

import { Title } from 'components/Title';
import { Input } from 'components/Input';

import styles from './Login.module.scss';
import { Button } from 'components/Button';


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
      <Title text='Login'></Title>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type="email"
          id="useremail"
          name='userEmail'
          placeholder='Your email'
          required htmlFor="useremail"
          label='Enter your e-mail'
        />
        <Input
          type="password"
          id="userpassword"
          name='userPassword'
          placeholder='Your password'
          minLength={7}
          required
          htmlFor="userpassword"
          label='Enter your password'
        />        
        <Button type='submit' text='Sign In'></Button>
      </form>
    </Section>
  );
};

export default Login;