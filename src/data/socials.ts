import { IconName } from "assets/icons";

export const socialIcons: IconDetails[] = [
  { iconName: 'phone', link: '' },
  { iconName: 'linkedIn', link: '' },
  { iconName: 'twitter', link: '' },
];

interface IconDetails {
  iconName: IconName;
  link: string;
}
