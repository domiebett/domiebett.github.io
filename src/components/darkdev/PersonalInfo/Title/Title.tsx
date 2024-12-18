import { aboutMe } from "temp/data/aboutMe";
import styles from "./Title.module.scss";

const Title = () => <h1 className={styles.title}>{aboutMe.name}</h1>;

export default Title;
