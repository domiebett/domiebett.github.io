import "./DownloadCv.scss";
import { Resume } from "files/files";

const DownloadCV = () => {
  const fileName = "Dominic Bett Resume.pdf";

  return (
    <div className="DownloadCV">
      <a href={Resume} target="_blank">
        View Resume
      </a>
    </div>
  );
};

export default DownloadCV;
