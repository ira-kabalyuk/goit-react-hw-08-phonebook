import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/contacts/contactsSlice';
import { selectContactsFilter } from '../../redux/contacts/contactsSlice.selectors';
import { Input } from 'components/Input';

import styles from './Filter.module.scss';

  const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectContactsFilter);

   const changeFilter = event => {

    const action = setFilter(event.currentTarget.value);
    dispatch(action);
  }

  return (
    <div className={styles.block}>
      <Input label='Search contact' type="text" value={filter} onChange={changeFilter} />  
    </div>
  );
};


export { Filter };
