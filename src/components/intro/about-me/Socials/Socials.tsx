import SocialIcon from 'components/helpers/SocialIcon/SocialIcon';
import { socialIcons } from 'data/socials';

import './Socials.scss';

const Socials = () => {
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

export default Socials;
