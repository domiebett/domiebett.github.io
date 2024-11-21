import { useState } from "react";
import Experience from "./Experience/Experience";

import Skills from "./Skills/Skills";

import styles from "./MyInfo.module.scss";

const views = [
  {
    title: "Skills",
    view: Skills,
  },
  {
    title: "Experience",
    view: Experience,
  },
];

const MyInfo = () => {
  return (
    <div className={styles.myInfo}>
      <div className={styles.views}>
        {views.map(({ title, view: View }, index) => (
          <div key={index} className={styles.viewContainer}>
            <h3 className={styles.viewTitle}>{title}</h3>
            <View key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInfo;
