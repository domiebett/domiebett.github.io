import TimeLine from 'components/helpers/TimeLine/TimeLine';
import './Experience.scss';

const experiences = [
  {
    startDate: 'June 2017',
    endDate: 'October 2018',
    title: 'Software Engineer',
    company: 'Andela',
    description: 'Andela hires the best engineers and places them in the best companies worldwide.',
  },
  {
    startDate: 'October 2018',
    endDate: 'February 2020',
    title: 'Software Engineer',
    company: 'Ceros',
    description: 'Ceros is a content management system for designers to create content without code',
  },
  {
    startDate: 'February 2020',
    endDate: 'February 2022',
    title: 'Quality Engineer',
    company: 'Ceros',
    description: 'Ceros is a content management system for designers to create content without code',
  },
  {
    startDate: 'February 2022',
    endDate: 'April 2023',
    title: 'Software Engineer',
    company: 'Ceros',
    description: 'Ceros is a content management system for designers to create content without code',
  },
];

const timeLineContents = experiences.map((experience) => {
  return {
    date: experience.startDate,
    title: experience.title,
    company: experience.company,
    description: experience.description,
  };
});

const Experience = () => {
  return (
    <div className="Experience">
      <TimeLine contents={timeLineContents} />
    </div>
  );
};

export default Experience;
