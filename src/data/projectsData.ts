export const projectsData: Project[] = [
  {
    year: 2023,
    project: "CKEditor WebSpellChecker Plugin",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "PHP", "WebSpellChecker API"],
    link: "https://webspellchecker.com/",
  },
  {
    year: 2022,
    project: "CKEditor (WYSIWYG Editor) Integration",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor.com/ckeditor-5/",
  },
  {
    year: 2022,
    project: "Ceros Studio",
    madeAt: "Ceros",
    tech: ["HTML Canvas", "Javascript", "ShareJS"],
    link: "https://www.ceros.com/studio/",
  },
  {
    year: 2021,
    project: "Protractor To WebDriverIO Migration",
    madeAt: "Ceros",
    tech: ["Webdriver IO", "Cucumber", "Jenkins"],
    link: "https://webdriver.io/",
  },
  {
    year: 2021,
    project: "Report Portal E2E Test Reporting",
    madeAt: "Ceros",
    tech: ["Report Portal", "AWS", "Jenkins"],
    link: "https://reportportal.io/",
  },
  {
    year: 2020,
    project: "E2E Test Automation in Jenkins",
    madeAt: "Ceros",
    tech: ["Jenkins", "CI Headless Browser"],
    link: "https://www.jenkins.io/",
  },
  {
    year: 2018,
    project: "Ride Sharing App",
    madeAt: "Personal",
    tech: ["Ruby", "Ruby On Rails", "Javascript"],
    link: "https://github.com/domiebett/ridesharing_app",
  },
  {
    year: 2018,
    project: "Micro Learning App",
    madeAt: "Personal",
    tech: ["Ruby", "Sinatra", "Javascript"],
    link: "https://github.com/domiebett/micro_learning_app",
  },
  {
    year: 2017,
    project: "Lenken Mentorship System",
    madeAt: "Andela",
    tech: ["Angular", "Laravel", "WYSIWYG"],
    link: '',
  },
];

export const projectColumns: IColumn[] = [
  { title: "Year", name: "year" },
  { title: "Projects", name: "project" },
  { title: "Made At", name: "madeAt" },
  { title: "Technologies", name: "tech" },
  { title: "Link", name: "link" },
];

type KeyNames = 'year' | 'project' | 'madeAt' | 'tech' | 'link';

export interface IColumn {
  title: string;
  name: KeyNames;
}

export interface Project {
  year: number;
  project: string;
  madeAt: string;
  tech: string[];
  link: string;
}
