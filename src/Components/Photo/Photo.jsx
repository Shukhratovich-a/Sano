import React from "react";

import useSection from "../../Hooks/useSection";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Photo.module.scss";

const Photo = () => {
  const { width } = useWindowDimensions();
  const [, setSection] = useSection();

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >= ref.current.offsetTop - 28 &&
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight - 28
        ) {
          setSection("photo");
        }
      });
    }
  });

  return (
    <section className={`${styles.photo}`} id={"photo"} ref={ref}>
      <Container className={`${styles.container}`}>
        {width > 900 && (
          <Circle
            className={`${styles.photo__circle}`}
            width={width > 768 ? 1382 : 825}
            height={width > 768 ? 1382 : 825}
          />
        )}

        <div className={`${styles.photo__inner}`}>
          <div className={`${styles.photo__inner__top}`}>
            <h2 className={`${styles.photo__heading}`}>
              <span className={`${styles.photo__heading__text}`}>photo</span>
              <span className={`${styles.photo__heading__text}`}>video</span>
            </h2>
          </div>

          <div className={`${styles.photo__wrapper}`}>
            <div className={`${styles.photo__info}`}>
              <h3 className={`${styles.photo__info__heading}`}>BOX #4</h3>

              <div className={`${styles.photo__info__inner}`}>
                <h4 className={`${styles.photo__info__subheading}`}>
                  Снимаем эффектные видео ролики для социальных сетей. Вовлекая пользователя
                  профессиональной съемкой:
                </h4>

                <ul className={`${styles.photo__info__list}`}>
                  <li className={`${styles.photo__info__item}`}>• видео роликов</li>
                  <li className={`${styles.photo__info__item}`}>• интервью</li>
                  <li className={`${styles.photo__info__item}`}>• промо</li>
                  <li className={`${styles.photo__info__item}`}>• пранков</li>
                </ul>

                <h4 className={`${styles.photo__info__subheading}`}>
                  Так же с нас сценарий, кастинг актеров и монтаж.
                </h4>
              </div>

              <span className={`${styles.photo__info__image}`}></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Photo;
