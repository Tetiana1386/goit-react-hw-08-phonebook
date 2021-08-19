import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={styles.Nav}>
      <NavLink
        to="/"
        exact
        className={styles.Link}
        activeClassName={styles.ActiveLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
