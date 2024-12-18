import { TimelineContent } from "models/experience";
import SkillsList from "../../SkillsList/SkillsList";

import styles from "./TimeLineContent.module.scss";

const TimeLineContent = ({ content }: IProps) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <article className={styles.timelineContent}>
      <header>
        <h4 className={styles.title}>
          <span>
            {content.title} - {content.company}
          </span>
          <span className={styles.date}>
            // {formatDate(content.startDate)} - {formatDate(content.endDate)}
          </span>
        </h4>
      </header>

      <section className={styles.contentBody}>
        {content.image && (
          <a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLogo}
          >
            <img src={content.image} alt={`${content.company}`} />
          </a>
        )}

        <p className={styles.description}>{content.description}</p>
      </section>

      <footer>
        <SkillsList skills={content.skills} />
      </footer>
    </article>
  );
};

export interface IProps {
  content: TimelineContent;
}

export default TimeLineContent;
