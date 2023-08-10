import { ScreenSizeContext } from 'contexts/Contexts';
import './TimeLine.scss';
import TimeLineContent, { IContent } from './TimeLineContent';

const TimeLine = ({ contents }: Props) => (
  <ScreenSizeContext.Consumer>
    {(screenSize) => (
      <div className={`TimeLine ${screenSize}`}>
        {contents.map((content, index) => (
          <TimeLineContent
            key={index}
            content={content}
            side={index % 2 === 0 ? 'left' : 'right'}
            screenSize={screenSize}
          />
        ))}
      </div>
    )}
  </ScreenSizeContext.Consumer>
);

interface Props {
  contents: IContent[];
}

export default TimeLine;
