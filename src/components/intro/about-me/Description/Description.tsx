import './Description.scss';

import { TypeAnimation } from 'react-type-animation';

const Description = () => {
  const delay = 1500;
  const speed = 10;
  const sequence = [
    'Software Engineer',
    delay,
    'Software Architect',
    delay,
    'Software Designer',
    delay,
  ];

  return (
    <div className="Description">
      I am a :
      <div className="animated-type">
        <TypeAnimation sequence={sequence} speed={speed} repeat={Infinity} />
      </div>
    </div>
  );
};

export default Description;
