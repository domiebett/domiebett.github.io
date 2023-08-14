// Logo
export const DLogo = require('./icons/D-Logo.png');

// Socials
export const LinkedIn = require('./icons/socials/linked-in.png');
export const Twitter = require('./icons/socials/twitter.png');
export const Phone = require('./icons/socials/phone.png');

export type IconName = 'linkedIn' | 'twitter' | 'phone';
export const SocialsIcons: Record<IconName, any> = {
  linkedIn: LinkedIn,
  twitter: Twitter,
  phone: Phone,
};

// Arrows
export const UpArrow = require('./icons/arrows/up-arrow.png');
export const DownArrow = require('./icons/arrows/down-arrow.png');

export type ArrowDirection = 'up' | 'down';
export const Arrow: Record<ArrowDirection, any> = {
  up: UpArrow,
  down: DownArrow,
};

// Skills
export const Aws = require('./icons/skills/aws.png');
export const Docker = require('./icons/skills/docker.png');
export const Javascript = require('./icons/skills/javascript.png');
export const Laravel = require('./icons/skills/laravel.png');
export const NodeJs = require('./icons/skills/nodejs.png');
export const Php = require('./icons/skills/php.png');
export const ReactJs = require('./icons/skills/reactjs.png');
