import { TimelineContent } from "models/experience";
import { AndelaImage } from "../../../../assets/images";
import Tech from "../Tech/Tech";
import "./TimeLineContent.scss";

const TimeLineContent = ({ content, side }: IProps) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className={`TimeLineContent ${side}`}>
      <span className="date">
        // {formatDate(content.startDate)} - {formatDate(content.endDate)}
      </span>

      <h3 className="title">
        {content.title} - {content.company}
      </h3>

      <div className="content-container">
        <div className="company-image">
          <img src={content.companyImage} alt="" />
        </div>

        <div className="content">
          <p className="description">{content.description}</p>
        </div>
      </div>

      <ul className="skills">
        {content.skills.map((skill, index) => (
          <Tech key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
};

export interface IProps {
  content: TimelineContent;
  side: "left" | "right";
}

export default TimeLineContent;
