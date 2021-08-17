import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <label className={styles.Label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.Input}
        value={filter}
        onChange={event =>
          dispatch(contactsActions.filterContact(event.target.value))
        }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
