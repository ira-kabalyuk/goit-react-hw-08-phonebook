
import { Section } from 'components/Section';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import styles from './Contacts.module.scss';


const Contacts = () => {
  
  return (
    <Section>
      <ContactForm/>
      <Filter />
      <ContactList/>
    </Section>
  );
};

export default Contacts;