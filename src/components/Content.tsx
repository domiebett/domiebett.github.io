import { Dispatch, SetStateAction, useState } from 'react';
import './Content.scss';
import Experience from './experience/Experience';
import Intro from './intro/Intro';

const Content = () => {
  const [screenSize, setScreenSize] = useState('Desktop');

  return (
    <div className={`Content ${screenSize}`}>
      <div className="Panel">
        <Intro />
      </div>
      <div className="Panel">
        <Experience />
      </div>
    </div>
  );
};

type ScreenSize = 'Desktop' | 'Mobile';

export default Content;
