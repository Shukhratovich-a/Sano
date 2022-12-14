import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import motion from "../../Datas/Motion";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Motion.module.scss";

const Motion = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("motion", ref);

  return (
    <section className={`${styles.motion}`} id={"motion"} ref={ref}>
      <Container className={`${styles.container}`}>
        {width > 900 && <Circle className={`${styles.motion__circle}`} width={550} height={550} />}

        <picture className={`${styles.hero__image}`}>
          <source
            type="image/webp"
            media="(max-width: 900px)"
            srcSet={`${motion.mobile.webp1x} 1x, ${motion.mobile.webp2x} 2x`}
          />

          <source
            type="image/webp"
            srcSet={`${motion.desktop.webp1x} 1x, ${motion.desktop.webp2x} 2x`}
          />

          <source
            media="(max-width: 900px)"
            srcSet={`${motion.mobile.png1x} 1x, ${motion.mobile.png2x} 2x`}
          />

          <img
            className={`${styles.motion__image}`}
            src={width > 900 ? motion.desktop.png1x : motion.mobile.png1x}
            srcSet={`${width > 900 ? motion.desktop.png1x : motion.mobile.png1x} 1x, ${
              width > 900 ? motion.desktop.png2x : motion.mobile.png2x
            } 2x`}
            alt="motion"
            width={width > 900 ? 1920 : 1080}
            height={width > 900 ? 1080 : 1920}
          />
        </picture>

        <div className={`${styles.motion__inner}`}>
          <div className={`${styles.motion__inner__top}`}>
            <h2 className={`${styles.motion__heading}`}>motion</h2>
            <span className={`${styles.motion__heading__design}`}></span>
            <span className={`${styles.motion__heading__move}`}></span>
          </div>

          <div className={`${styles.motion__wrapper}`}>
            <div className={`${styles.motion__info}`}>
              <h3 className={`${styles.motion__info__heading}`}>BOX #3</h3>

              <div className={`${styles.motion__info__inner}`}>
                <h4 className={`${styles.motion__info__subheading}`}>Motion design ??????:</h4>

                <ul className={`${styles.motion__info__list}`}>
                  <li className={`${styles.motion__info__item}`}>??? ?????????????????? / ????????????????</li>
                  <li className={`${styles.motion__info__item}`}>??? SMM ????????????</li>
                  <li className={`${styles.motion__info__item}`}>??? ????????????</li>
                  <li className={`${styles.motion__info__item}`}>??? LED ??????????????</li>
                  <li className={`${styles.motion__info__item}`}>??? ??????????????????????</li>
                </ul>
              </div>

              <span className={`${styles.motion__info__image}`}></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Motion;
