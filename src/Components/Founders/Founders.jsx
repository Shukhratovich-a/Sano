import React from "react";

import useSection from "../../Hooks/useSection";

import founders from "../../Datas/Founders";

import Container from "../Container/Container";

import styles from "./Founders.module.scss";

const Founders = () => {
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
        <div className={`${styles.founders__top}`}>
          <h2 className={`${styles.founders__heading__text}`}>основатели</h2>

          <span className={`${styles.founders__heading__subtext}`}>наша команда</span>
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

                <div className={`${styles.founder__quote}`}>
                  <blockquote className={`${styles.founder__quote__text}`}>
                    {founder.quote}
                  </blockquote>
                </div>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default Founders;
