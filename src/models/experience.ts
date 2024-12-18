export interface TimelineContent {
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  skills: string[];
  company: string;
  image: any;
  link: string;
}

export interface IExperience extends TimelineContent {}
