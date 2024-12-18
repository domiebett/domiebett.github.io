import TimeLine from '../../helpers/TimeLine/TimeLine';
import { experiences as myExperiences } from '../../../../temp/data/experienceData';
import { useEffect, useState } from 'react';
import { IExperience } from 'models/experience';

import styles from './Experiences.module.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([])

  useEffect(() => {
    setExperiences([...myExperiences].reverse());

    return () => {};
  }, []);

  return (
    <div className={styles.experiences}>
      <TimeLine contents={experiences} />
    </div>
  );
};

export default Experience;
