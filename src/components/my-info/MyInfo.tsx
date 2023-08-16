import { useState } from "react";
import Experience from "./Experience/Experience";

import "./MyInfo.scss";
import Skills from "./Skills/Skills";
import Switcher from "./Switcher/Switcher";
import { ScreenSizeContext } from "contexts/Contexts";

const views = [
  {
    title: "Experience",
    view: Experience,
  },
  {
    title: "Skills",
    view: Skills,
  },
];

const MyInfo = () => {
  const [activeView, setActiveView] = useState("Experience");

  return (
    <div className="MyInfo">
      <div className="Views">
        {views.map(({ title, view: View }, index) => (
          <div className="View-container">
            <h3>{title}</h3>
            <View />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInfo;
