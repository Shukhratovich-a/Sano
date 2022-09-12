import Container from "../Container/Container";

import styles from "../Achievements/Achievements.module.scss";

const Achievements = () => {
  return (
    <section>
      <Container>
        <ul className={`${styles.achievements__list}`}>
          <li className={`${styles.achievements__item}`}>
            <span className={`${styles.achievements__circlebig}`}>
              <span className={`${styles.achievements__circlesmall}`}>
                <span className={`${styles.achievements__number}`}>23+</span>
              </span>
            </span>
            <p className={`${styles.achievements__text}`}>Проектов</p>
          </li>

          <li className={`${styles.achievements__item}`}>
            <span className={`${styles.achievements__circlebig}`}>
              <span className={`${styles.achievements__circlesmall}`}>
                <span className={`${styles.achievements__number}`}>150+</span>
              </span>
            </span>

            <p className={`${styles.achievements__text}`}>Заявок</p>
          </li>

          <li className={`${styles.achievements__item}`}>
            <span className={`${styles.achievements__circlebig}`}>
              <span className={`${styles.achievements__circlesmall}`}>
                <span className={`${styles.achievements__circlesmall__inner}`}>
                  <span className={`${styles.achievements__number}`}>100</span>
                  <span className={`${styles.achievements__procent}`}>%</span>
                </span>
              </span>
            </span>

            <p className={`${styles.achievements__text}`}>Довольные клиенты</p>
          </li>

          <li className={`${styles.achievements__item}`}>
            <span className={`${styles.achievements__circlebig}`}>
              <span className={`${styles.achievements__circlesmall}`}>
                <span className={`${styles.achievements__number}`}>7+</span>
              </span>
            </span>
            
            <p className={`${styles.achievements__text}`}>Квалификационных сотрудников</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Achievements;
