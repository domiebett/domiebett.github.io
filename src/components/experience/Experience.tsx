import { MainCompProps } from 'types/Props';

const Experience = ({ visible }: MainCompProps) => {
  return (
    <div
      className="MainComponent Experience"
      style={{
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
      }}
    >
      This is my Experience.
      <span>I am a very experienced dude</span>
    </div>
  );
};

export default Experience;
