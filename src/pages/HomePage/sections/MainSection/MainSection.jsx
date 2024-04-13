import React from "react";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <>
      <section className={styles["main-section"]}>
        <div className="container">
          <div className={styles["main-section-row"]}>
            <div className={styles["main-section__description"]}>
              <h1>
                <span>Аренда </span>
                Фото
              </h1>
              <h1>И видео</h1>
              <h1>оборудования</h1>
              {/* <div className={styles["main-section__circle"]}></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
