import { nameGif } from "assets/gifs";
import "./Logo.scss";

import { DLogo } from "assets/icons";
import { ScreenSizeContext } from "contexts/Contexts";

const Logo = () => {
  return (
    <ScreenSizeContext.Consumer>
      {(screenSize) => (
        <div className={`Logo ${screenSize}`}>
          <img src={nameGif} alt="d-logo" />
          <div className="name">
            <h2>Dominic</h2>
            <h2>Bett</h2>
          </div>
        </div>
      )}
    </ScreenSizeContext.Consumer>
  );
};

export default Logo;
