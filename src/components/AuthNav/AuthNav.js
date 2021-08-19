import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.Link}
      activeClassName={styles.ActiveLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.Link}
      activeClassName={styles.ActiveLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
