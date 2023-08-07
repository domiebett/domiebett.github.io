import {  createContext, useState } from 'react';
import './Content.scss';
import Experience from './experience/Experience';
import Intro from './intro/Intro';
import Socials from './intro/about-me/Socials/Socials';
import { ScreenSizeContext } from 'contexts/Contexts';

const Content = () => {
  const [screenSize, setScreenSize] = useState('Desktop');

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <div className={`Content ${screenSize}`}>
        <div className="Panel">
          <Intro />
        </div>
        <div className="Panel">
          <Experience />
        </div>
      </div>
      <div className="Footer">
        <Socials />
      </div>
    </ScreenSizeContext.Provider>
  );
};

type ScreenSize = 'Desktop' | 'Mobile';

export default Content;
