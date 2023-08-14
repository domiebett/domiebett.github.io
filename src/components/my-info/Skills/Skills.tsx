import { skillsData } from 'data/skillsData';
import './Skills.scss';
import Skill from './Skill/Skill';
import { ScreenSizeContext } from 'contexts/Contexts';

const Skills = () => {
  return (
    <ScreenSizeContext.Consumer>
      {(screenSize) => (
        <div className={`Skills ${screenSize}`}>
          {skillsData.map((skillData, index) => (
            <Skill key={index} name={skillData.name} logo={skillData.logo} />
          ))}
        </div>
      )}
    </ScreenSizeContext.Consumer>
  );
};

export default Skills;
