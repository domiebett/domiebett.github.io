import { useState } from 'react';
import Experience from './Experience/Experience';

import './MyInfo.scss';
import Skills from './Skills/Skills';
import Switcher from './Switcher/Switcher';
import { ScreenSizeContext } from 'contexts/Contexts';

const views = [
  {
    title: 'Experience',
    view: Experience,
  },
  {
    title: 'Skills',
    view: Skills,
  },
];

const MyInfo = () => {
  const [activeView, setActiveView] = useState('Experience');

  return (
    <ScreenSizeContext.Consumer>
      {(screenSize) => (
        <div className={`MyInfo ${screenSize}`}>
          <Switcher
            setActiveView={(activeView: string) => setActiveView(activeView)}
            activeView={activeView}
            titles={views.map((view) => view.title)}
          />

          <div className="Views">
            {views.map(({ title, view: View }, index) => {
              return (
                <div
                  key={index}
                  style={{
                    visibility: activeView === title ? 'visible' : 'hidden',
                    opacity: activeView === title ? 1 : 0,
                  }}
                  className="View-container"
                >
                  <View />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </ScreenSizeContext.Consumer>
  );
};

export default MyInfo;
