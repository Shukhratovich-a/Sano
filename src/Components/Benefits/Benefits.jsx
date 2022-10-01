import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import benefits from "../../Datas/Benefits";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import Container from "../Container/Container";

import "swiper/scss";
import "./BenefitsSwiper.scss";
import styles from "../Benefits/Benefits.module.scss";

const Benefits = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("benefits", ref);

  return (
    <section className={`${styles.benefits}`} id={"benefits"} ref={ref}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.benefits__heading__top}`}>
          <h2 className={`${styles.benefits__heading__text}`}>
            <span>5</span>
            {width > 768 && <span> </span>}
            <span>причин выбрать нас</span>
          </h2>

          {width > 1050 && (
            <span className={`${styles.benefits__heading__subtext}`}>причины выбрать нас</span>
          )}
        </div>

        <Swiper className={styles.benefits__list} slidesPerView={"auto"} spaceBetween={20}>
          {benefits.length > 0 &&
            benefits.map((benefit, index) => (
              <SwiperSlide
                className={`${styles.benefits__item}`}
                style={{ backgroundImage: `url(${benefit.image})` }}
                key={index}
              >
                <div className={`${styles.benefit__top}`}>
                  <span className={`${styles.benefit__ordernumber}`}>№{index + 1}</span>
                </div>
                <p className={`${styles.benefit__text}`}>{benefit.title}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Benefits;
