import TimeLine from '../../helpers/TimeLine/TimeLine';
import './Experience.scss';
import { experiences as timelineExperiences } from '../../../../temp/data/experienceData';
import { useEffect, useState } from 'react';
import { TimelineExperience } from 'models/experience';

const Experience = () => {
  const [experiences, setExperiences] = useState<TimelineExperience[]>([])

  useEffect(() => {
    setExperiences([...timelineExperiences].reverse());

    return () => {};
  }, []);

  return (
    <div className="Experience">
      <TimeLine contents={experiences} />
    </div>
  );
};

export default Experience;
