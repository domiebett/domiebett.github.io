import './TimeLine.scss';
import TimeLineContent, { IContent } from './TimeLineContent';

const TimeLine = ({ contents }: Props) => (
      <div className={"TimeLine"}>
        {contents.map((content, index) => (
          <TimeLineContent
            key={index}
            content={content}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
);

interface Props {
  contents: IContent[];
}

export default TimeLine;
