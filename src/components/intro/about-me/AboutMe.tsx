import './AboutMe.scss';
import Description from './Description';
import DownloadCV from './DownloadCV';
import Logo from './Logo';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <Logo />
      <Description />
      <DownloadCV />
  </div>)
};

export default AboutMe;
