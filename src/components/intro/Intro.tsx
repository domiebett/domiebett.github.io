import AboutMe from './about-me/AboutMe';
import Pic from './pic/Pic';
import './Intro.scss';
import { MainCompProps } from 'types/Props';

const Intro = ({ visible }: MainCompProps) => {
  return (
    <div
      className="MainComponent Intro"
      style={{
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
      }}
    >
      <AboutMe />
      <Pic />
    </div>
  );
};

export default Intro;
