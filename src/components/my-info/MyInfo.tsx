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
      <Switcher titles={views.map((view) => view.title)} />

      <div className="Views">
        {views.map(({ title, view: View }, index) => (
          <View key={index} active={activeView === title} />
        ))}
      </div>
    </div>
  );
};

export default MyInfo;
