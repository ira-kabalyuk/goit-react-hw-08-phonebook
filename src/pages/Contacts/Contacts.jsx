
import { Section } from 'components/Section';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import styles from './Contacts.module.scss';


const Contacts = () => {
  
  return (
    <Section>
      <div className={styles.wrapper}>
        <ContactForm/>
        <div>
          <h2 className={styles.title}>Your contacts</h2>
          <Filter />
          <ContactList/>
        </div>        
      </div>      
    </Section>
  );
};

export default Contacts;