import { ScreenSizeContext } from 'contexts/Contexts';
import './DownloadCv.scss';
import { Resume } from 'files/files';

const DownloadCV = () => {
  const fileName = 'Dominic Bett Resume.pdf';
  
  return <ScreenSizeContext.Consumer>
    {(screenSize) => (
      <div className={`DownloadCV ${screenSize}`}>
        <button>
          <a href={Resume} download={fileName}>Download CV</a>
        </button>
      </div>
    )}
  </ScreenSizeContext.Consumer>
};

export default DownloadCV;
