export const projectsData: Project[] = [
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
  },
  {
    year: 2021,
    project: "CK Editor",
    madeAt: "Ceros",
    tech: ["CKEditor 5", "Typescript", "WYSIWYG"],
    link: "https://ckeditor5.com",
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
