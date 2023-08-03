export const DLogo = require('./icons/D-Logo.png');
export const LinkedIn = require('./icons/linked-in.png');
export const Twitter = require('./icons/twitter.png');
export const Phone = require('./icons/phone.png');
export const UpArrow = require('./icons/up-arrow.png');
export const DownArrow = require('./icons/down-arrow.png');

export type IconName = 'linkedIn' | 'twitter' | 'phone';
export const SocialsIcons: Record<IconName, any> = {
  linkedIn: LinkedIn,
  twitter: Twitter,
  phone: Phone,
};

export type ArrowDirection = 'up' | 'down';
export const Arrow: Record<ArrowDirection, any> = {
  up: UpArrow,
  down: DownArrow,
};
