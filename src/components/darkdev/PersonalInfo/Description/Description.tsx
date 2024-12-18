import { aboutMe } from "temp/data/aboutMe";
import styles from "./Description.module.scss";

const Description = () => (
  <p className={styles.description}>{aboutMe.description}</p>
);

export default Description;
