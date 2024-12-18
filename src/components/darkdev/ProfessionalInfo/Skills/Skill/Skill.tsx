import styles from "./Skill.module.scss";

const Skill = ({ name, logo }: Props) => (
  <div className={styles.skill}>
    <div className={styles.imageContainer} aria-hidden="true">
      <img src={logo} alt="" />
    </div>
    <p className={styles.name}>{name}</p>
  </div>
);

interface Props {
  name: string;
  logo: any;
}

export default Skill;
