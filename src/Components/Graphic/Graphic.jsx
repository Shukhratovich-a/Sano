import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import graphic from "../../Datas/Graphic";

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
          <picture className={`${styles.hero__image}`}>
            <source
              type="image/webp"
              media="(max-width: 900px)"
              srcSet={`${graphic.mobile.webp1x} 1x, ${graphic.mobile.webp2x} 2x`}
            />

            <source
              type="image/webp"
              srcSet={`${graphic.desktop.webp1x} 1x, ${graphic.desktop.webp2x} 2x`}
            />

            <source
              media="(max-width: 900px)"
              srcSet={`${graphic.mobile.png1x} 1x, ${graphic.mobile.png2x} 2x`}
            />

            <img
              className={`${styles.graphic__image}`}
              src={width > 900 ? graphic.desktop.png1x : graphic.mobile.png1x}
              srcSet={`${width > 900 ? graphic.desktop.png1x : graphic.mobile.png1x} 1x, ${
                width > 900 ? graphic.desktop.png2x : graphic.mobile.png2x
              } 2x`}
              alt="Graphic"
              width={width > 900 ? 1920 : 900}
              height={width > 900 ? 1080 : 1600}
            />
          </picture>

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
