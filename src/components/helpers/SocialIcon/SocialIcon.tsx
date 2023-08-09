import { IconName, SocialsIcons } from 'assets/icons';
import './SocialIcon.scss';

const SocialsIcon = ({ iconName, link }: Props) => {
  const icon = SocialsIcons[iconName];
  return (
    <button className='SocialIcon'>
      <img src={icon} alt="" />
    </button>
  );
};

interface Props {
  iconName: IconName;
  link: string;
}

export default SocialsIcon;
