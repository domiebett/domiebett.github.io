import Role from "./Role/Role";
import Links from "./Links/Links";
import Description from "./Description/Description";
import Socials from "./Socials/Socials";
import Title from "./Title/Title";

import styles from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  return (
    <article className={styles.container}>
      <header>
        <Title />
        <Role />
      </header>

      <section>
        <Description />
      </section>

      <section>
        <Links />
      </section>

      <footer className={styles.footer}>
        <Socials direction="horizontal" />
      </footer>
    </article>
  );
};

export default PersonalInfo;
