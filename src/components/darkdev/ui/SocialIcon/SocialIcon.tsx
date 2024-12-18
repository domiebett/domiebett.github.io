import { IconName, SocialsIcons } from '../../../../assets/icons';
import styles from './SocialIcon.module.scss';

const SocialsIcon = ({ iconName, link }: Props) => {
  const icon = SocialsIcons[iconName];
  return (
    <a href={link} className={`unstyled-button ${styles.socialIcon}`} target='_blank' aria-label={`Find me on ${iconName}`}>
      <img src={icon} alt={`${iconName} logo`} />
    </a>
  );
};

interface Props {
  iconName: IconName;
  link: string;
}

export default SocialsIcon;
