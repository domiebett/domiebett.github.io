import { createContext, useEffect, useState } from 'react';
import './Content.scss';
import Intro from './intro/Intro';
import Socials from './intro/about-me/Socials/Socials';
import { ScreenSizeContext } from 'contexts/Contexts';
import MyInfo from './my-info/MyInfo';

const Content = () => {
  const [screenSize, setScreenSize] = useState('Desktop');
  const breakPoint = 1000;

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize, breakPoint]);

  const handleResize = () => {
    if (window.innerWidth <= breakPoint && screenSize !== 'Mobile') {
      setScreenSize('Mobile');
    } else if (window.innerWidth > breakPoint && screenSize !== 'Desktop') {
      setScreenSize('Desktop');
    }
  };

  handleResize();

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <div className={`Content ${screenSize}`}>
        <div className="Panel">
          <Intro />
        </div>
        <div className="Panel">
          <MyInfo />
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
