import AboutMe from './about-me/AboutMe';
import Pic from './pic/Pic';
import './Intro.scss';
import { MainCompProps } from 'types/Props';

const Intro = () => {
  return (
    <div className="Intro">
      <AboutMe />
    </div>
  );
};

export default Intro;
