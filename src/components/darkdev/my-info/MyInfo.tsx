import Experience from "./Experience/Experience";

import Skills from "./Skills/Skills";

import styles from "./MyInfo.module.scss";

const MyInfo = () => {
  return (
    <div className={styles.myInfo}>
      {/* <button className={`${styles.scrollButton} top`}>Up</button> */}
      <div className={styles.views}>
        <section className={styles.viewContainer}>
          <h3 className={styles.viewTitle}>Skills</h3>
          <Skills />
        </section>

        <section className={styles.viewContainer}>
          <h3 className={styles.viewTitle}>Experience</h3>
          <Experience />
        </section>
      </div>
      {/* <button className={`${styles.scrollButton} bottom`}>Down</button> */}
    </div>
  );
};

export default MyInfo;
