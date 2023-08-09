import './TimeLineContent.scss';

const TimeLineContent = ({ content, side }: IProps) => (
  <div className={`TimeLineContent ${side}`}>
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
}

export interface IContent {
  date: string;
  title: string;
  description: string;
}

export default TimeLineContent;
