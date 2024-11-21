import { AndelaImage, CerosImage } from "../assets/images";

export const experiences = [
  {
    startDate: new Date(2017, 5),
    endDate: new Date(2018, 9),
    title: "Software Engineer",
    company: "Andela",
    description:
      "As part of a dynamic team at Andela, we engineered Lenken, an impactful Mentorship system. Seamlessly aligning individuals with mentors, Lenken propels personalized professional growth through inventive design and technical excellence.",
    skills: ["Javascript", "Php", "Angular", "Laravel"],
    companyImage: AndelaImage,
  },
  {
    startDate: new Date(2018, 9),
    endDate: new Date(2020, 1),
    title: "Software Engineer",
    company: "Ceros",
    description:
      "In tandem with the Ceros Admin team, I molded an intuitive hub for managing projects and experiences. By blending tech expertise with creative finesse, I transformed how interactive content is crafted and controlled.",
    skills: [
      "Javascript",
      "Backbone",
      "React",
      "Php",
      "AWS",
      "Docker",
      "VMWare",
    ],
    companyImage: CerosImage,
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
    companyImage: CerosImage,
  },
  {
    startDate: new Date(2022, 1),
    endDate: new Date(2023, 3),
    title: "Software Engineer",
    company: "Ceros",
    description:
      "I powered 6 years of Ceros Studio evolution, empowering designers to create captivating websites effortlessly. My role fused tech finesse with creative ardor, turning concepts into immersive digital realities and cementing Ceros Studio's pioneering stance.",
    skills: ["Javascript", "React", "Backbone", "Php", "AWS", "Docker", "HTMLCanvas"],
    companyImage: CerosImage,
  },
];
