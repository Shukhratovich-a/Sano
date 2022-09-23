import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useSection from "../../Hooks/useSection";

import Container from "../Container/Container";

import "swiper/scss";
import "./BenefitsSwiper.scss";
import styles from "../Benefits/Benefits.module.scss";

const Benefits = () => {
  const [, setSection] = useSection();

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >= ref.current.offsetTop &&
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          setSection("benefits");
        }
      });
    }
  });

  return (
    <section className={`${styles.benefits}`} ref={ref} id={"benefits"}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.benefits__heading__top}`}>
          <h2 className={`${styles.benefits__heading__text}`}>
            <span>5 </span>
            <span>причин выбрать нас</span>
          </h2>

          <span className={`${styles.benefits__heading__subtext}`}>причины выбрать нас</span>
        </div>

        <Swiper className={styles.benefits__list} slidesPerView={"auto"} spaceBetween={20}>
          <SwiperSlide className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№1</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              SANO Agency SMM-агентство с высоким уровнем экспертизы. Мы привлекаем реальных
              клиентов к вашему бизнесу, а не просто клики и пустых подписчиков.
            </p>
          </SwiperSlide>
          <SwiperSlide className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№2</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Свой штат сотрудников - 5 профессионалов с опытом более 3 лет в сфере SMM продвижения;
            </p>
          </SwiperSlide>

          <SwiperSlide className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№3</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Более 15 успешных и долговременных кейсов за 8 лет продвижения в социальных сетях;
            </p>
          </SwiperSlide>

          <SwiperSlide className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№4</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Постоянное повышение квалификации сотрудников на различных тренингах и вебинарах;
            </p>
          </SwiperSlide>

          <SwiperSlide className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№5</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Доступные цены на предоставляемые услуги, при высоком качестве исполнения
            </p>
          </SwiperSlide>
        </Swiper>

        {/* <ol className={`${styles.benefits__list}`}>
          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№1</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              SANO Agency SMM-агентство с высоким уровнем экспертизы. Мы привлекаем реальных клиентов к вашему бизнесу,
              а не просто клики и пустых подписчиков.
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№2</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Свой штат сотрудников - 5 профессионалов с опытом более 3 лет в сфере SMM продвижения;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№3</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Более 15 успешных и долговременных кейсов за 8 лет продвижения в социальных сетях;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№4</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Постоянное повышение квалификации сотрудников на различных тренингах и вебинарах;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№5</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Доступные цены на предоставляемые услуги, при высоком качестве исполнения
            </p>
          </li>
        </ol> */}
      </Container>
    </section>
  );
};

export default Benefits;
