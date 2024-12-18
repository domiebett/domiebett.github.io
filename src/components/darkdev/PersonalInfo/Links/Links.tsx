import { Resume } from "../../../../temp/files/files";
import { Link } from "react-router-dom";

import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <Link to={Resume} target="_blank">View Resume</Link>
      <Link to={'/portfolio'}>View Portfolio</Link>
    </div>
  );
};

export default Links;
