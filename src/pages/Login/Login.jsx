
import { useDispatch, useSelector } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';
import { selectAuthErrorCode } from '../../redux/auth/authSlice.selectors';

import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

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

  const error = useSelector(selectAuthErrorCode);  

  console.log(error, 'error')
  
  return (
    <Section>
      <Title text='Login' />      
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type="email"
          id="useremail"
          name='userEmail'
          placeholder='Your email'
          required htmlFor="useremail"
          label='Enter your e-mail'
          hasError={error}
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
          hasError={error}
        />
        <Button type='submit' text='Sign In'></Button>
      </form>
    </Section>
  );
};

export default Login;