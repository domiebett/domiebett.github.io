import TimeLine from 'components/helpers/TimeLine/TimeLine';
import './Experience.scss';
import { experiences } from 'data/experienceData';


const timeLineContents = experiences.reverse().map((experience) => {
  return {
    startDate: experience.startDate,
    endDate: experience.endDate,
    title: experience.title,
    company: experience.company,
    description: experience.description,
    skills: experience.skills,
    companyImage: experience.companyImage,
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
