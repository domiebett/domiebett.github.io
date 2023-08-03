import Intro from './components/intro/Intro';
import './App.scss';
import Scroller from 'components/helpers/Scroller';
import Experience from 'components/experience/Experience';
import { useState } from 'react';

const App = () => {
  const Components = [Intro, Experience]
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (value: number) => {
    if (activeIndex + value < 0) {
      return setActiveIndex(0);
    } else if (activeIndex + value >= Components.length) {
      return setActiveIndex(Components.length - 1);
    }

    return setActiveIndex(activeIndex + value);
  }

  return (
    <div className='App'>
      {
        Components.map((Component, index) => (
          <Component visible={index === activeIndex} />
        ))
      }
      <Scroller scroll={scroll} scrollUpActive={activeIndex > 0} scrollDownActive={activeIndex < Components.length - 1} />
    </div>
  );
};

export default App;
