import { ViewProps } from '../IView';
import './Experience.scss';

const Experience = ({styles}: ViewProps) => {
  return (
    <div style={styles} className="Experience">
      This is my Experience.
      <span>I am a very experienced dude</span>
    </div>
  );
};

export default Experience;
