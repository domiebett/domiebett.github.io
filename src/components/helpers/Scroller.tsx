import { useState } from "react";
import './Scroller.scss';

const Scroller = () => {
    const scrollDownActive = useState(true);
    const scrollUpActive = useState(false);

    return (
        <div className="Scroller">
            <div className="scroll-up"></div>
            <div className="scroll-down"></div>
        </div>
    )
}

export default Scroller;
