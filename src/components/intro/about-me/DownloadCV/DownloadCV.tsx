import { ScreenSizeContext } from 'contexts/Contexts';
import './DownloadCv.scss';

const DownloadCV = () => (
  <ScreenSizeContext.Consumer>
    {(screenSize) => (
      <div className={`DownloadCV ${screenSize}`}>
        <button>Download CV</button>
      </div>
    )}
  </ScreenSizeContext.Consumer>
);

export default DownloadCV;
