import "./Links.scss";
import { Resume } from "../../../../../temp/files/files";
import { Link } from "react-router-dom";

const Links = () => {
  const fileName = "Dominic Bett Resume.pdf";

  return (
    <div className="Links">
      <Link to={Resume} target="_blank">View Resume</Link>
      <Link to={'/portfolio'}>View Portfolio</Link>
    </div>
  );
};

export default Links;
