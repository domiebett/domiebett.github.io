import "./Title.scss";

const Title = ({title}: Props) => (
  <div className="Title">
    <h2 className="name">{title}</h2>
  </div>
);

interface Props {
  title: string;
}

export default Title;
