import React from "react";
import { Link } from "react-scroll";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import HeroImage from "../../Assets/Images/Hero/Main.webp";

import Arrow from "../Lib/Icons/Arrow";
import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Hero.module.scss";

const Hero = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("hero", ref);

  return (
    <section className={`${styles.hero}`} id={"hero"} ref={ref}>
      <Container className={`${styles.container}`}>
        <Circle className={`${styles.hero__circle}`} />
        <div className={`${styles.hero__inner}`}>
          <div className={`${styles.hero__info}`}>
            <h1 className={`${styles.hero__heading}`}>
              <span className={`${styles.hero__heading__inner}`}>Опора вашего бизнеса!</span>
            </h1>

            <strong className={`${styles.hero__subheading}`}>Привет, мы команда “SANO”</strong>

            <p className={`${styles.hero__description}`}>
              Мы предоставляем услуги SMM и дазйна для вашего бизнеса.
            </p>

            <Link
              className={`${styles.hero__link}`}
              to={"contact"}
              offset={width > 900 ? -200 : width > 700 ? -16 : width > 375 ? -30 : -20}
            >
              <span>Свяжись</span>
              <Arrow />
            </Link>
          </div>

          {width > 1140 && (
            <img
              className={`${styles.hero__image}`}
              src={HeroImage}
              alt="Человек указывает пальцем на описания сайта"
              width={800}
              height={656}
              loading={"lazy"}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
