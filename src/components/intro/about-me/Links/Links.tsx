import "./Links.scss";
import { Resume } from "files/files";
import { Link } from "react-router-dom";

const Links = () => {
  const fileName = "Dominic Bett Resume.pdf";

  return (
    <div className="DownloadCV">
      <a href={Resume} target="_blank">
        View Resume
      </a>
    </div>
  );
};

export default Links;
