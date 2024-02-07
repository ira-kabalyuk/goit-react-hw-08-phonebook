import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteContact, apiGetContacts } from '../../redux/contacts/contactsSlice';
import {  
  selectContactsStatus,
  selectFilteredContacts
} from '../../redux/contacts/contactsSlice.selectors';
import { STATUSES } from 'utils/constants';

import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import styles from './ContactList.module.scss';
import { Button } from 'components/Button';
import { toast } from 'react-toastify';

const ContactList = () => {

  const dispatch = useDispatch();

  const status = useSelector(selectContactsStatus);

  const filteredContacts = useSelector(selectFilteredContacts)

   useEffect(() => {
     dispatch(apiGetContacts())
   }, [dispatch])
  
 
  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId)).unwrap()
      .then((data) => { toast.success(`Contact "${data.name}" was successfully deleted`); })
      .catch(err => toast.error(err));;
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
              <div className={styles.info}>
                <div>
                  <span className={styles.label}>Name</span>
                  <p className={styles.name}>{name}</p>
                </div>
                <div>
                  <span className={styles.label}>Number</span>
                  <p className={styles.number}>{number}</p>
                </div>
              </div>
             <Button onClick={() => onDeleteContact(id)} text='Delete' />
            </li>
          ))}
        </ul>
      ) : <Error>Contact not found &#129335;</Error>}
    </div>
  );
};

export { ContactList };
