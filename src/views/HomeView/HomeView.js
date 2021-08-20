import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { variants } from '../../variables/motionVariable';
import styles from './HomeView.module.css';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={styles.Wrapper}>
      <AnimatePresence>
        <motion.h1
          className={styles.Title}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Keep your contacts in a safe place!
        </motion.h1>
      </AnimatePresence>
      {!isLoggedIn && (
        <AnimatePresence>
          <motion.p
            className={styles.Info}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Please, <b>Sign up</b> or <b>Log in</b> to access your contacts.
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
};

export default HomeView;
