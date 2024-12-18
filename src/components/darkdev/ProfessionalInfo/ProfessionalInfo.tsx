import Experience from "./Experiences/Experiences";
import Skills from "./Skills/Skills";

import styles from "./ProfessionalInfo.module.scss";

const ProfessionalInformation = () => {
  return (
    <div className={styles.views}>
      <section className={styles.viewContainer} role="region" aria-labelledby="skills-title">
        <h3 id="skills-title" className={styles.viewTitle}>Skills</h3>
        <Skills />
      </section>

      <section className={styles.viewContainer} role="region" aria-labelledby="experiences-title">
        <h3 id="experiences-title" className={styles.viewTitle}>Experience</h3>
        <Experience />
      </section>
    </div>
  );
};

export default ProfessionalInformation;
