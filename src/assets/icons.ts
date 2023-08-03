export const DLogo = require('./icons/D-Logo.png');
export const LinkedIn = require('./icons/linked-in.png');
export const Twitter = require('./icons/twitter.png');
export const Phone = require('./icons/phone.png');

export type IconName = 'linkedIn' | 'twitter' | 'phone';
export const SocialsIcons: Record<IconName, any> = {
  linkedIn: LinkedIn,
  twitter: Twitter,
  phone: Phone,
};
