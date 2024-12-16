import { TimelineContent } from 'models/experience';
import './TimeLine.scss';
import TimeLineContent from './TimeLineContent';

const TimeLine = ({ contents }: Props) => (
      <div className={"TimeLine"}>
        {contents.map((content, index) => (
          <TimeLineContent
            key={index}
            content={content}
            side='right'
          />
        ))}
      </div>
);

interface Props {
  contents: TimelineContent[];
}

export default TimeLine;
