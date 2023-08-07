import { ViewProps } from '../IView';
import './Experience.scss';

const Experience = ({active}: ViewProps) => {
  return (
    <div className="Experience">
      This is my Experience.
      <span>I am a very experienced dude</span>
    </div>
  );
};

export default Experience;
