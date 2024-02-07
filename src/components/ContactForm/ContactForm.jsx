import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { apiPostContact } from '../../redux/contacts/contactsSlice';
import { selectContacts } from '../../redux/contacts/contactsSlice.selectors';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { toast } from 'react-toastify';


const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const createContact = (name, number) => {
    
    const contact = {
      name,
      number,
    };

    if (contacts?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()))
    {
      return alert(`${name} is already in phonebook`);
    }    
    
    dispatch(apiPostContact(contact)).unwrap()
      .then((data) => { toast.success(`Contact "${data.name}" was successfully added`); })
      .catch(err => toast.error(err));
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }

    if (name === 'number')
      setNumber(value);
  };
  
  const reset = () => {
    setName('');
    setNumber('');
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    createContact(name, number);
    reset();
  }  

  return (
    <div>
      <Title text='Create contact'></Title>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='enter contact name'
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input label='enter contact number'
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />        
        <Button type="submit" text='Add Contact'></Button>
      </form>
    </div>
    
  );
};


export { ContactForm };

