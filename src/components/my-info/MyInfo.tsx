import { useState } from 'react';
import Experience from './Experience/Experience';

import './MyInfo.scss';
import Skills from './Skills/Skills';
import Switcher from './Switcher/Switcher';

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
    <div className="MyInfo">
      <Switcher
        setActiveView={(activeView: string) => setActiveView(activeView)}
        activeView={activeView}
        titles={views.map((view) => view.title)}
      />

      <div className="Views">
        {views.map(({ title, view: View }, index) => {
          const style = {
            visibility: activeView === title ? 'visible' : 'hidden',
            opacity: activeView === title ? 1 : 0,
          };
          return <View key={index} styles={style} />;
        })}
      </div>
    </div>
  );
};

export default MyInfo;
