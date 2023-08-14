import { IconName, SocialsIcons } from 'assets/icons';
import './SocialIcon.scss';

const SocialsIcon = ({ iconName, link }: Props) => {
  const icon = SocialsIcons[iconName];
  return (
    <a href={link} className='SocialIcon' target='_blank'>
      <img src={icon} alt="" />
    </a>
  );
};

interface Props {
  iconName: IconName;
  link: string;
}

export default SocialsIcon;
