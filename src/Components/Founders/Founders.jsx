import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useSection from "../../Hooks/useSection";

import founders from "../../Datas/Founders";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Founders.module.scss";

const Founders = () => {
  const { width } = useWindowDimensions();
  const [, setSection] = useSection();

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >= ref.current.offsetTop &&
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          setSection("founders");
        }
      });
    }
  });

  return (
    <section className={`${styles.founders}`} id={"founders"} ref={ref}>
      <Container>
        {width <= 900 ? (
          <Circle className={`${styles.founder__circle}`} width={825} height={825} />
        ) : null}

        <div className={`${styles.founders__top}`}>
          <h2 className={`${styles.founders__heading__text}`}>основатели</h2>

          {width > 1020 && (
            <span className={`${styles.founders__heading__subtext}`}>наша команда</span>
          )}
        </div>

        <ul className={`${styles.founders__list}`}>
          {founders.length > 0 &&
            founders.map((founder, index) => (
              <li
                className={`${styles.founder} ${styles["founder--" + founder.color]}`}
                key={index}
              >
                <div className={`${styles.founder__inner}`}>
                  <img
                    className={`${styles.founder__image}`}
                    src={founder.image.image}
                    alt={founder.name}
                    width={founder.image.width}
                    height={founder.image.height}
                  />

                  <h3 className={`${styles.founder__name}`}>{founder.name}</h3>
                </div>

                <div className={`${styles.founder__info}`}>
                  <h3 className={`${styles.founder__job}`}>{founder.job}</h3>

                  <span className={`${styles.founder__experience}`}>{founder.experience}</span>
                </div>

                {width > 900 && (
                  <div className={`${styles.founder__quote}`}>
                    <blockquote className={`${styles.founder__quote__text}`}>
                      {founder.quote}
                    </blockquote>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default Founders;
