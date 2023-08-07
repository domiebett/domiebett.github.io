import './AboutMe.scss';
import Description from './Description/Description';
import DownloadCV from './DownloadCV/DownloadCV';
import Logo from './Logo/Logo';


const AboutMe = () => {
  return (
    <div className="AboutMe">
      <Logo />
      <Description />
      <DownloadCV />
  </div>)
};

export default AboutMe;
