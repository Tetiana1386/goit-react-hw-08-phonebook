import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={styles.List}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.Item} key={id}>
          <p className={styles.Text}>
            {name}: <span className={styles.Span}>{number}</span>
          </p>
          <button
            className={styles.Button}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
