import './AboutMe.scss';
import Role from './Role/Role';
import Links from './Links/Links';
import Description from './Description/Description';
import Socials from './Socials/Socials';
import Title from './Title/Title';


const AboutMe = () => {
  const title = 'Dominic Bett';
  return (
    <div className="AboutMe">
      <Title title={title} />
      <Role />
      <Description />
      <Links />
      <Socials direction='horizontal' />
  </div>)
};

export default AboutMe;
