import React from "react";
import { Link } from "react-scroll";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useSection from "../../Hooks/useSection";

import HeroImage from "../../Assets/Images/Hero/Main.webp";

import Arrow from "../Lib/Icons/Arrow";
import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Hero.module.scss";

const Hero = () => {
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
          setSection("hero");
        }
      });
    }
  });

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
              offset={width > 900 ? -200 : -30}
            >
              <span>Свяжись</span>
              <Arrow />
            </Link>
          </div>

          {width > 1140 && (
            <img
              className={`${styles.hero__image}`}
              src={HeroImage}
              alt=""
              width={800}
              height={656}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
