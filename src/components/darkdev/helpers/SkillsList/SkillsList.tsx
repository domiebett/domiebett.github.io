import styles from './SkillsList.module.scss';

const SkillsList = ({ skills }: Props) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill, index) => (
        <li className={styles.skill} key={index}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

type Skills = string[];

interface Props {
  skills: Skills;
}

export default SkillsList;
