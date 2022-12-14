import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import achievements from "../../Datas/Achievements";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "../Achievements/Achievements.module.scss";

const Achievements = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("achievements", ref);

  return (
    <section className={`${styles.achievements}`} id={"achievements"} ref={ref}>
      <Container className={`${styles.container}`}>
        {width <= 900 ? (
          <Circle className={`${styles.achievements__circle}`} width={1245} height={1245} />
        ) : null}

        <ul className={`${styles.achievements__list}`}>
          {achievements.length &&
            achievements.map((achievement, index) => (
              <li className={`${styles.achievement}`} key={index}>
                <div className={`${styles.achievement__inner}`}>
                  <svg
                    className={`${styles.achievement__circle}`}
                    width="170"
                    height="170"
                    style={
                      !achievement.isFull
                        ? { transform: "translate(-50%, -50%) rotate(-85deg)" }
                        : null
                    }
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="78"
                      stroke="currentColor"
                      strokeWidth={13}
                      fillOpacity={0}
                      strokeLinecap={"round"}
                      strokeDasharray={!achievement.isFull ? 465 : 0}
                      strokeDashoffset={!achievement.isFull ? 40 : 0}
                    />
                  </svg>

                  <span
                    className={`${styles.achievement__number}`}
                    aria-label={achievement.text.symbol === "%" ? "procent" : "plus"}
                  >
                    <span>{achievement.text.number}</span>
                    <span>{achievement.text.symbol}</span>
                  </span>
                </div>

                <p className={`${styles.achievement__text}`}>{achievement.title}</p>

                <span
                  className={`${styles.achievement__image}`}
                  aria-label={`${achievement.image}`}
                ></span>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default Achievements;
