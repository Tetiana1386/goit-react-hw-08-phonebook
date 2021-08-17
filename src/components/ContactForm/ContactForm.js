import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  //const contacts = useSelector(contactsSelectors.getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(contactsOperations.addContact(name, number));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label className={styles.Label}>
        Name
        <input
          className={styles.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={styles.Label}>
        Number
        <input
          className={styles.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
          placeholder="111-11-11"
        />
      </label>
      <button className={styles.Button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
