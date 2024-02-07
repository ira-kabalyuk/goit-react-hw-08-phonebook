
import { Section } from 'components/Section';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Title } from 'components/Title';

import styles from './Contacts.module.scss';

const Contacts = () => {
  
  return (
    <Section>
      <div className={styles.wrapper}>
        <ContactForm/>
        <div>
          <Title text='Your contacts'></Title>
          <Filter />
          <ContactList/>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;