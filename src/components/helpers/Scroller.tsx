import { useState } from 'react';
import { Arrow } from 'assets/icons';

import './Scroller.scss';

const Scroller = ({ scroll, scrollUpActive, scrollDownActive }: Props) => {
  return (
    <div className="Scroller">
      <button
        onClick={() => scroll(-1)}
        className="no-style-button scroll up"
        style={{ visibility: scrollUpActive ? 'visible' : 'hidden' }}
      >
        <img src={Arrow.up} alt="" />
      </button>

      <button
        onClick={() => scroll(1)}
        className="no-style-button scroll down"
        style={{ visibility: scrollDownActive ? 'visible' : 'hidden' }}
      >
        <img src={Arrow.down} alt="" />
      </button>
    </div>
  );
};

interface Props {
  scroll: Function;
  scrollUpActive: boolean;
  scrollDownActive: boolean;
}

export default Scroller;
