import PersonalInfo from "../../../components/darkdev/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "../../../components/darkdev/ProfessionalInfo/ProfessionalInfo";

import styles from './HomePage.module.scss';

const HomePage = () => (
    <main className={styles.appContainer}>
      <section role="region" aria-label="Personal Information">
        <div className={styles.personalInfo}>
          <PersonalInfo />
        </div>
      </section>

      <section aria-label="Professional Information" className={styles.professionalInfo}>
          <ProfessionalInfo />
      </section>
    </main>
)

export default HomePage;
