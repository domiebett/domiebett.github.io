import { useState } from "react";
import Experience from "./Experience/Experience";

import "./MyInfo.scss";
import Skills from "./Skills/Skills";

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
  return (
    <div className="MyInfo">
      <div className="Views">
        {views.map(({ title, view: View }, index) => (
          <div key={index} className="View-container">
            <h3>{title}</h3>
            <View key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInfo;
