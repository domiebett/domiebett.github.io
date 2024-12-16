import "./Role.scss";

import { TypeAnimation } from "react-type-animation";
import { aboutMe } from "temp/data/aboutMe";

const Role = () => {
  const {rolePrefix, rolePostFix} = aboutMe;
  const delay = 1500;
  const speed = 10;

  const sequence = rolePostFix.reduce((sequence: any[], role) => {
    return [...sequence, role, delay];
}, []);

  return (<div className="Role">
    <div className="animated-type">
      {rolePrefix}&nbsp;
      <span>
        <TypeAnimation sequence={sequence} speed={speed} repeat={Infinity} />
      </span>
    </div>
  </div>)
}

export default Role;
