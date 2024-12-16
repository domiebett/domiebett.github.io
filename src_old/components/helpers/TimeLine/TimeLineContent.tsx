import { AndelaImage } from "../../../assets/images";
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
      <div className="content">
        <h3 className="title">{content.title} - {content.company}</h3>
        <p className="description">{content.description}</p>
        <ul className="skills">
          {content.skills.map((skill, index) => (
            <Tech key={index} name={skill} />
          ))}
        </ul>
      </div>
      <div className="company-image">
        <img src={content.companyImage} alt="" />
      </div>
    </div>
  );
};

export interface IProps {
  content: IContent;
  side: "left" | "right";
}

export interface IContent {
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  skills: string[];
  company: string;
  companyImage: any;
}

export default TimeLineContent;
