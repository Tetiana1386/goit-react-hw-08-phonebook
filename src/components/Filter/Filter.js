import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../variables/motionVariable';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <AnimatePresence>
          <label className={styles.Label}>
            <motion.input
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              variants={variants}
              className={styles.Input}
              type="text"
              value={filter}
              onChange={event =>
                dispatch(contactsActions.filterContact(event.target.value))
              }
            />
          </label>
        </AnimatePresence>
      )}
    </>
  );
};

export default Filter;
