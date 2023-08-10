import './TimeLineContent.scss';

const TimeLineContent = ({ content, side, screenSize }: IProps) => (
  <div className={`TimeLineContent ${screenSize} ${side}`}>
    <span className="date">{content.date}</span>
    <div className="content">
      <h2 className="title">{content.title}</h2>
      <p className="description">{content.description}</p>
    </div>
  </div>
);

export interface IProps {
  content: IContent;
  side: 'left' | 'right';
  screenSize: string;
}

export interface IContent {
  date: string;
  title: string;
  description: string;
}

export default TimeLineContent;
