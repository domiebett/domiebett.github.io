import "./Role.scss";

import { TypeAnimation } from "react-type-animation";
import { speed, sequence } from "../../../../../temp/data/iamData";

const Role = () => (
  <div className="Role">
    <div className="animated-type">
      Software&nbsp;
      <span>
        <TypeAnimation sequence={sequence} speed={speed} repeat={Infinity} />
      </span>
    </div>
  </div>
);

export default Role;
