import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Human from "../../Assets/Images/Target/Main.webp";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Target.module.scss";

const Target = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={`${styles.target}`} id={"target"}>
      <Container className={`${styles.container}`}>
        {width > 550 && <Circle className={`${styles.target__circle}`} />}
        {width > 550 && <Circle className={`${styles.target__circle}`} width={547} height={511} />}

        <div className={`${styles.target__inner}`}>
          {width > 1060 ? (
            <img
              className={`${styles.target__image}`}
              src={Human}
              alt=""
              width={1014}
              height={816}
            />
          ) : (
            <h2 className={`${styles.target__heading}`}>SMM TARGET</h2>
          )}

          {width > 1060 ? (
            <h2 className={`${styles.target__heading}`}>SMM TARGET</h2>
          ) : (
            <img
              className={`${styles.target__image}`}
              src={Human}
              alt=""
              width={1014}
              height={816}
            />
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
                <li className={`${styles.target__info__item}`}>• Проводим A/B тестирование</li>
                <li className={`${styles.target__info__item}`}>
                  • Создаем offer, конкурсы и опросы
                </li>
                <li className={`${styles.target__info__item}`}>• Привлекаем "ЖИВЫХ" подписчиков</li>
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
