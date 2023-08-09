import { IconName } from 'assets/icons';
import SocialIcon from 'components/helpers/SocialIcon/SocialIcon';

import './Socials.scss';

const Socials = () => {
  const socialIcons: IconDetails[] = [
    { iconName: 'phone', link: '' },
    { iconName: 'linkedIn', link: '' },
    { iconName: 'twitter', link: '' },
  ];

  return (
    <div className="Socials">
      <div className="icons">
        {socialIcons.map(({ iconName, link }, index) => (
          <SocialIcon key={index} iconName={iconName} link={link} />
        ))}
      </div>
    </div>
  );
};

interface IconDetails {
  iconName: IconName;
  link: string;
}

export default Socials;
