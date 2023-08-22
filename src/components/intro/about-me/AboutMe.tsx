import './AboutMe.scss';
import Role from './Role/Role';
import Links from './Links/Links';
import Logo from './Logo/Logo';
import Description from './Description/Description';
import Socials from './Socials/Socials';


const AboutMe = () => {
  return (
    <div className="AboutMe">
      <Logo />
      <Role />
      <Description />
      <Links />
      <Socials />
  </div>)
};

export default AboutMe;
