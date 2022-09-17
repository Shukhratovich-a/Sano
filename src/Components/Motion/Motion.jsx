import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useSection from "../../Hooks/useSection";

import HumanDesktop from "../../Assets/Images/Motion/HumanDesktop.png";
import HumanMobile from "../../Assets/Images/Motion/HumanMobile.png";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Motion.module.scss";

const Motion = () => {
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
          setSection("motion");
        }
      });
    }
  });

  return (
    <section className={`${styles.motion}`} id={"motion"} ref={ref}>
      <Container className={`${styles.container}`}>
        <Circle className={`${styles.motion__circle}`} width={550} height={550} />

        <div className={`${styles.motion__inner}`}>
          <img
            className={`${styles.motion__image}`}
            src={width > 900 ? HumanDesktop : HumanMobile}
            alt="motion"
            width={width > 900 ? 1920 : 1080}
            height={width > 900 ? 1080 : 1920}
          />

          <div className={`${styles.motion__inner__top}`}>
            <h2 className={`${styles.motion__heading}`}>motion</h2>
            <span className={`${styles.motion__heading__design}`}></span>
            {/* <span className={`${styles.motion__heading__move}`}></span> */}
          </div>

          <div className={`${styles.motion__wrapper}`}>
            <div className={`${styles.motion__info}`}>
              <h3 className={`${styles.motion__info__heading}`}>BOX #3</h3>

              <div className={`${styles.motion__info__inner}`}>
                <h4 className={`${styles.motion__info__subheading}`}>Motion design для:</h4>

                <ul className={`${styles.motion__info__list}`}>
                  <li className={`${styles.motion__info__item}`}>• Логотипов / слоганов</li>
                  <li className={`${styles.motion__info__item}`}>• SMM постов</li>
                  <li className={`${styles.motion__info__item}`}>• Сайтов</li>
                  <li className={`${styles.motion__info__item}`}>• LED экранов</li>
                  <li className={`${styles.motion__info__item}`}>• Телевидении</li>
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
