import { skillsData } from "data/skillsData";
import "./Skills.scss";
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <div className={"Skills"}>
      {skillsData.map((skillData, index) => (
        <Skill key={index} name={skillData.name} logo={skillData.logo} />
      ))}
    </div>
  );
};

export default Skills;
