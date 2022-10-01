import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import HumanDesktop from "../../Assets/Images/Graphic/HumanDesktop.png";
import HumanMobile from "../../Assets/Images/Graphic/HumanMobile.png";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Graphic.module.scss";

const Graphic = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("graphic", ref);

  return (
    <section className={`${styles.graphic}`} id={"graphic"} ref={ref}>
      <Container className={`${styles.container}`}>
        {width > 900 && <Circle className={`${styles.graphic__circle}`} />}

        <div className={`${styles.graphic__inner}`}>
          <img
            className={`${styles.graphic__image}`}
            src={width > 900 ? HumanDesktop : HumanMobile}
            alt="Graphic"
            width={width > 900 ? 1920 : 900}
            height={width > 900 ? 1080 : 1600}
          />

          <div className={`${styles.graphic__inner__top}`}>
            <h2 className={`${styles.graphic__heading}`}>graphic</h2>
            <span className={`${styles.graphic__heading__design}`}></span>
            <span className={`${styles.graphic__heading__palette}`}></span>
          </div>

          <div className={`${styles.graphic__wrapper}`}>
            <div className={`${styles.graphic__info}`}>
              <h3 className={`${styles.graphic__info__heading}`}>BOX #2</h3>

              <div className={`${styles.graphic__info__inner}`}>
                <h4 className={`${styles.graphic__info__subheading}`}>Дизайн для:</h4>

                <ul className={`${styles.graphic__info__list}`}>
                  <li className={`${styles.graphic__info__item}`}>• Лого</li>
                  <li className={`${styles.graphic__info__item}`}>• Бренд бук</li>
                  <li className={`${styles.graphic__info__item}`}>• Брендинг/Ребрендинг</li>
                  <li className={`${styles.graphic__info__item}`}>• POSM</li>
                  <li className={`${styles.graphic__info__item}`}>• Наружной рекламы</li>
                  <li className={`${styles.graphic__info__item}`}>• Упаковки продукции</li>
                  <li className={`${styles.graphic__info__item}`}>• Постов</li>
                </ul>
              </div>

              <span className={`${styles.graphic__info__image}`}></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Graphic;
