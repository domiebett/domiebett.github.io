import { ScreenSizeContext } from 'contexts/Contexts';
import './Switcher.scss';

const Switcher = ({ setActiveView, titles, activeView }: Props) => {
  return (
    <ScreenSizeContext.Consumer>
      {(screenSize) => (
        <div className={`Switcher ${screenSize}`}>
          {titles.map((title, index) => (
            <button
              key={index}
              onClick={() => setActiveView(title)}
              className={`Switches ${activeView === title ? 'active' : ''}`}
            >
              {title}
            </button>
          ))}
        </div>
      )}
    </ScreenSizeContext.Consumer>
  );
};

export interface Props {
  titles: string[];
  activeView: string;
  setActiveView: Function;
}

export default Switcher;
