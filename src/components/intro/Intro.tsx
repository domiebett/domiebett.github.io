import AboutMe from './about-me/AboutMe';
import Pic from './pic/Pic';
import './Intro.scss';

const Intro = () => {
  return (
    <div className='Intro'>
      <AboutMe />
      <Pic />
    </div>
  );
};

export default Intro;
