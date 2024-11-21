import './Skill.scss';

const Skill = ({ name, logo }: Props) => (
  <div className="Skill">
    <div className="skill-logo">
        <img src={logo} alt="" />
    </div>
    <div className="skill-name">{name}</div>
  </div>
);

interface Props {
  name: string;
  logo: any;
}

export default Skill;
