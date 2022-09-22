import Container from "../Container/Container";

import styles from "../Achievements/Achievements.module.scss";

const Achievements = () => {
  return (
    <section className={`${styles.achievements}`} id={"achievements"}>
      <Container>
        <ul className={`${styles.achievements__list}`}>
          <li className={`${styles.achievement}`}>
            <div className={`${styles.achievement__inner}`}>
              <svg className={`${styles.achievement__circle}`} width="170" height="170">
                <circle
                  cx="50%"
                  cy="50%"
                  r="78"
                  stroke="currentColor"
                  strokeWidth={13}
                  fillOpacity={0}
                  strokeLinecap={"round"}
                />
              </svg>

              <span className={`${styles.achievement__number}`}>
                <span>23</span>
                <span>+</span>
              </span>
            </div>

            <p className={`${styles.achievement__text}`}>Проектов</p>

            <span className={`${styles.achievement__image}`}></span>
          </li>

          <li className={`${styles.achievement}`}>
            <div className={`${styles.achievement__inner}`}>
              <svg className={`${styles.achievement__circle}`} width="170" height="170">
                <circle
                  cx="50%"
                  cy="50%"
                  r="78"
                  stroke="currentColor"
                  strokeWidth={13}
                  fillOpacity={0}
                  strokeLinecap={"round"}
                />
              </svg>

              <span className={`${styles.achievement__number}`}>
                <span>150</span>
                <span>+</span>
              </span>
            </div>

            <p className={`${styles.achievement__text}`}>Заявок</p>

            <span className={`${styles.achievement__image}`}></span>
          </li>

          <li className={`${styles.achievement}`}>
            <div className={`${styles.achievement__inner}`}>
              <svg className={`${styles.achievement__circle}`} width="170" height="170">
                <circle
                  cx="50%"
                  cy="50%"
                  r="78"
                  stroke="currentColor"
                  strokeWidth={13}
                  fillOpacity={0}
                  strokeLinecap={"round"}
                />
              </svg>

              <span className={`${styles.achievement__number}`} aria-label="procent">
                <span>100</span>
                <span>%</span>
              </span>
            </div>

            <p className={`${styles.achievement__text}`}>Довольные клиенты</p>

            <span className={`${styles.achievement__image}`}></span>
          </li>

          <li className={`${styles.achievement}`}>
            <div className={`${styles.achievement__inner}`}>
              <svg
                className={`${styles.achievement__circle}`}
                width="170"
                height="170"
                style={{ transform: "translate(-50%, -50%) rotate(-85deg)" }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r="78"
                  stroke="currentColor"
                  strokeWidth={13}
                  fillOpacity={0}
                  strokeLinecap={"round"}
                  strokeDasharray={"465"}
                  strokeDashoffset={"40"}
                />
              </svg>

              <span className={`${styles.achievement__number}`}>
                <span>7</span>
                <span>+</span>
              </span>
            </div>

            <p className={`${styles.achievement__text}`}>Квалификационных сотрудников</p>

            <span className={`${styles.achievement__image}`}></span>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Achievements;
