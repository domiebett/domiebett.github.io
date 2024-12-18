import SocialIcon from "../../helpers/SocialIcon/SocialIcon";
import { socialIcons } from "../../../../temp/data/socials";

import styles from "./Socials.module.scss";

const Socials = ({ direction }: Props) => {
  return (
    <ul className={`${styles.icons} ${styles[direction]}`}>
      {socialIcons.map(({ iconName, link }, index) => (
        <li className={styles.icon} key={index}>
          <SocialIcon iconName={iconName} link={link} />
        </li>
      ))}
    </ul>
  );
};

interface Props {
  direction: "vertical" | "horizontal";
}

export default Socials;
