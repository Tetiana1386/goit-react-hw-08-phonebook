import imageNotFound from '../../img/pageNotFound.jpg';
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className={styles.ErrorContainer}>
      <img src={imageNotFound} width="650" alt="Error" />
      <h1 className={styles.Title}>Page not found</h1>
    </div>
  );
}
