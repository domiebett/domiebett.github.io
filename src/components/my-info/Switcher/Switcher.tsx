import { ScreenSizeContext } from "contexts/Contexts";
import "./Switcher.scss";

const Switcher = ({ setActiveView, titles, activeView }: Props) => {
  return (
    <div className="Switcher">
      {titles.map((title, index) => (
        <button
          key={index}
          onClick={() => setActiveView(title)}
          className={`Switches ${activeView === title ? "active" : ""}`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export interface Props {
  titles: string[];
  activeView: string;
  setActiveView: Function;
}

export default Switcher;
