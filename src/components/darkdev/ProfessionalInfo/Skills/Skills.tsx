import { skillsData } from "../../../../temp/data/skillsData";
import Skill from "./Skill/Skill";

import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <ul className={styles.skills}>
      {skillsData.map((skillData, index) => (
        <li className={styles.skill} key={index}>
          <Skill name={skillData.name} logo={skillData.logo} />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
