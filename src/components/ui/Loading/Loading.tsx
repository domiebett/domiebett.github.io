import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loaderIcon}></span>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};

export default Loading;
