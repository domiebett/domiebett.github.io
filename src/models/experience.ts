export interface TimelineContent {
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  skills: string[];
  company: string;
  companyImage: any;
  website: string;
}

export interface TimelineExperience extends TimelineContent {}
