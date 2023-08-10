import { nameGif } from 'assets/gifs';
import './Logo.scss';

import { DLogo } from "assets/icons";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={nameGif} alt="d-logo" />
      <div className="name">
        <h2>Dominic</h2>
        <h2>Bett</h2>
      </div>
    </div>
  );
};

export default Logo;
