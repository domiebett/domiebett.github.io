import { TimelineContent } from "models/experience";
import TimeLineContent from "./TimelineContent/TimeLineContent";

import styles from "./TimeLine.module.scss";

const TimeLine = ({ contents }: Props) => (
  <ul className={styles.timeline}>
    {contents.map((content, index) => (
      <li className={styles.timelineItem} key={index}>
        <TimeLineContent content={content} />
      </li>
    ))}
  </ul>
);

interface Props {
  contents: TimelineContent[];
}

export default TimeLine;
