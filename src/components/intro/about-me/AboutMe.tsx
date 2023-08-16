import './AboutMe.scss';
import Role from './Role/Role';
import DownloadCV from './DownloadCV/DownloadCV';
import Logo from './Logo/Logo';
import Description from './Description/Description';
import Socials from './Socials/Socials';


const AboutMe = () => {
  return (
    <div className="AboutMe">
      <Logo />
      <Role />
      <Description />
      <DownloadCV />
      <Socials />
  </div>)
};

export default AboutMe;
