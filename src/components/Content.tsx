import { createContext, useEffect, useState } from "react";
import "./Content.scss";
import Intro from "./intro/Intro";
import Socials from "./intro/about-me/Socials/Socials";
import { ScreenSizeContext } from "contexts/Contexts";
import MyInfo from "./my-info/MyInfo";

const Content = () => (
  <>
    <div className="Content">
      <div className="Panel">
        <Intro />
      </div>
      <div className="Panel">
        <MyInfo />
      </div>
    </div>
  </>
);

type ScreenSize = "Desktop" | "Mobile";

export default Content;
