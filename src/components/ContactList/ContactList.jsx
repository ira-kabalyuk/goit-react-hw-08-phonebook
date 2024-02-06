import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteContact, apiGetContacts } from '../../redux/contacts/contactsSlice';
import { STATUSES } from 'utils/constants';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import styles from './ContactList.module.scss';
import {  
  selectContactsStatus,
  selectFilteredContacts
} from '../../redux/contacts/contactsSlice.selectors';

const ContactList = () => {

  const dispatch = useDispatch();

  const status = useSelector(selectContactsStatus);

  const filteredContacts = useSelector(selectFilteredContacts)

   useEffect(() => {
     dispatch(apiGetContacts())
   }, [dispatch])
  
 
  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  }

  const visibleContacts = filteredContacts; // мемоізація

  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;

  return (
    <div>
      {showLoader && <Loader />}
      {showError && <Error>Oops, some error occurred...</Error>}

      {(visibleContacts.length > 0 ) ? (
        <ul className={styles.list}>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
              <span>{name}</span>
              <span>{number}</span>
              <button type='button' className={styles.button} onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : <Error>Contact not found &#129335;</Error>}
    </div>
  );
};

export { ContactList };
