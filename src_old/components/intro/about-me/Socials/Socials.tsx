import SocialIcon from '../../../helpers/SocialIcon/SocialIcon';
import { socialIcons } from '../../../../data/socials';

import './Socials.scss';

const Socials = ({direction}: Props) => {
  return (
    <div className="Socials">
      <div className={`icons ${direction}`}>
        {socialIcons.map(({ iconName, link }, index) => (
          <SocialIcon key={index} iconName={iconName} link={link} />
        ))}
      </div>
    </div>
  );
};

interface Props {
  direction: 'vertical' | 'horizontal';
}

export default Socials;
