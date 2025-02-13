import { IExperience } from "models/experience";
import { Andela, Ceros, Gantner } from "assets/icons";

export const experiences: IExperience[] = [
  {
    startDate: new Date(2017, 5),
    endDate: new Date(2018, 9),
    title: "Junior Software Engineer",
    company: "Andela",
    description:
      "As part of a dynamic team at Andela, we engineered Lenken, an impactful learning management system. Lenken propels personalized professional growth through inventive design and technical excellence.",
    skills: ["Javascript", "Php", "Angular", "Laravel"],
    image: Andela,
    link: 'https://andela.com'
  },
  {
    startDate: new Date(2020, 1),
    endDate: new Date(2022, 1),
    title: "Quality Engineer",
    company: "Ceros",
    description:
      "As a Quality Engineer at Ceros, I worked in a dynamic team that orchestrated a transformative framework migration from Protractor to WebdriverIO. This pivotal shift amplified our end-to-end testing capabilities, fortifying quality standards across the board.",
    skills: [
      "Javascript",
      "WebdriverIO",
      "Cucumber",
      "Protractor",
      "Jenkins",
      "Digital Ocean",
    ],
    image: Ceros,
    link: 'https://ceros.com'
  },
  {
    startDate: new Date(2018, 10),
    endDate: new Date(2023, 3),
    title: "Software Engineer",
    company: "Ceros",
    description:
      "Enhanced Ceros Studio’s usability by integrating CKEditor5, adding advanced text editing features and spellchecking. Collaborated with the editor team to develop functionality that improved content editability, creating a more seamless experience for designers.",
    skills: ["Javascript", "React", "Backbone", "Php", "AWS", "Docker", "HTMLCanvas"],
    image: Ceros,
    link: 'https://ceros.com'
  },
  {
    startDate: new Date(2023, 11),
    endDate: new Date(2024, 9),
    title: "Frontend Software Engineer",
    company: "Gantner",
    description:
      "Independently developed the frontend of Dawamy, a time management and attendance tracking system, improving performance, accessibility, user experience, and interface design to deliver a seamless and efficient solution.",
    skills: ["Javascript", "Angular", "ASP.NET", "SQL Server", "Figma"],
    image: Gantner,
    link: 'https://gantner.com',
  }
];
