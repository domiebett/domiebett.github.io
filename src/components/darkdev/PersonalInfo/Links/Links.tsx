import { Resume } from "../../../../temp/files/files";
import { Link } from "react-router-dom";

import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <Link to={Resume} target="_blank" className={styles.resumeLink}>Open Resume</Link>
      <Link to={'/portfolio'} className={styles.portfolioLink}>View Projects</Link>
    </div>
  );
};

export default Links;
