import './TimeLineContent.scss';

const TimeLineContent = ({ content, side, screenSize }: IProps) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short'});
  }
  
  return (
    <div className={`TimeLineContent ${screenSize} ${side}`}>
      <span className="date">// {formatDate(content.startDate)} - {formatDate(content.endDate)}</span>
      <div className="content">
        <h2 className="title">{content.title}</h2>
        <p className="description">{content.description}</p>
      </div>
    </div>
  );
}

export interface IProps {
  content: IContent;
  side: 'left' | 'right';
  screenSize: string;
}

export interface IContent {
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
}

export default TimeLineContent;
