import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import target from "../../Datas/Target";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Target.module.scss";

const Target = () => {
  const { width } = useWindowDimensions();
  const ref = React.useRef(null);

  useScroll("target", ref);

  return (
    <section className={`${styles.target}`} id={"target"} ref={ref}>
      <Container className={`${styles.container}`}>
        {width > 550 && <Circle className={`${styles.target__circle}`} />}
        {width > 550 && (
          <Circle className={`${styles.target__circle}`} width={547} height={511} />
        )}

        <div className={`${styles.target__inner}`}>
          {width > 1060 ? (
            <picture>
              <source
                type="image/webp"
                srcSet={`${target.targetWebp1x} 1x, ${target.targetWebp2x} 2x`}
              />

              <img
                className={`${styles.target__image}`}
                src={target.targetPng1x}
                srcSet={`${target.targetPng1x} 1x, ${target.targetPng2x} 2x`}
                alt="Человек указывает пальцем на описания сайта"
                width={1014}
                height={816}
              />
            </picture>
          ) : (
            <h2 className={`${styles.target__heading}`}>
              <span>SMM TARGET</span>
            </h2>
          )}

          {width > 1060 ? (
            <h2 className={`${styles.target__heading}`}>
              <span>SMM TARGET</span>
            </h2>
          ) : (
            <picture>
              <source
                type="image/webp"
                srcSet={`${target.targetWebp1x} 1x, ${target.targetWebp2x} 2x`}
              />

              <img
                className={`${styles.target__image}`}
                src={target.targetPng1x}
                srcSet={`${target.targetPng1x} 1x, ${target.targetPng2x} 2x`}
                alt="Человек указывает пальцем на описания сайта"
                width={1014}
                height={816}
              />
            </picture>
          )}

          <div className={`${styles.target__info}`}>
            <h3 className={`${styles.target__info__heading}`}>BOX #1</h3>

            <div className={`${styles.target__info__inner}`}>
              <h4 className={`${styles.target__info__subheading}`}>
                Полное SMM продвижение под "ключ":
              </h4>

              <ul className={`${styles.target__info__list}`}>
                <li className={`${styles.target__info__item}`}>
                  • Запускаем эффективную рекламу в Instagram, Facebook
                </li>
                <li className={`${styles.target__info__item}`}>
                  • Проводим A/B тестирование
                </li>
                <li className={`${styles.target__info__item}`}>
                  • Создаем offer, конкурсы и опросы
                </li>
                <li className={`${styles.target__info__item}`}>
                  • Привлекаем "ЖИВЫХ" подписчиков
                </li>
                <li className={`${styles.target__info__item}`}>
                  • Делаем подборку лидеров мнений и подбираем блогеров и вайнеров
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Target;
