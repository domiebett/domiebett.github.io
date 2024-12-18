import { TypeAnimation } from "react-type-animation";
import { aboutMe } from "temp/data/aboutMe";

import styles from "./Role.module.scss";

const Role = () => {
  const { rolePrefix, rolePostFix } = aboutMe;
  const delay = 1500;
  const speed = 10;

  const sequence = rolePostFix.reduce((sequence: any[], role) => {
    return [...sequence, role, delay];
  }, []);

  return (
    <h2 className={styles.role}>
      <span>{rolePrefix}&nbsp;</span>
      <span className={styles.dynamic}>
        <TypeAnimation sequence={sequence} speed={speed} repeat={Infinity} />
      </span>
    </h2>
  );
};

export default Role;
