import { ScreenSizeContext } from 'contexts/Contexts';
import './Description.scss';

import { TypeAnimation } from 'react-type-animation';
import { speed, sequence } from 'data/iamData';

const Description = () => {
  return (
    <ScreenSizeContext.Consumer>
      {(screenSize) => (
        <div className={`Description ${screenSize}`}>
          I am a :
          <div className="animated-type">
            <span>Software </span>
            <span>
              <TypeAnimation
                sequence={sequence}
                speed={speed}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
      )}
    </ScreenSizeContext.Consumer>
  );
};

export default Description;
