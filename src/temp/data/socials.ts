import { IconName } from "../../assets/icons";

export const socialIcons: IconDetails[] = [
  { iconName: "email", link: "mailto:dbett49@gmail.com" },
  {
    iconName: "linkedIn",
    link: "https://www.linkedin.com/in/dominic-bett-a6430a125/",
  },
  { iconName: "twitter", link: "https://twitter.com/bett001" },
  { iconName: "github", link: "https://github.com/domiebett" },
];

interface IconDetails {
  iconName: IconName;
  link: string;
}
