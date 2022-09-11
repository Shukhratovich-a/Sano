import Human from "../../Assets/Images/Graphic/Human.png";

import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Graphic.module.scss";

const Graphic = () => {
  return (
    <section className={`${styles.graphic}`} id={"graphic"}>
      <Container className={`${styles.container}`}>
        <Circle className={`${styles.graphic__circle}`} />

        <div className={`${styles.graphic__inner}`}>
          <img
            className={`${styles.graphic__image}`}
            src={Human}
            alt="Graphic"
            width={1920}
            height={1080}
          />

          <div className={`${styles.graphic__inner__top}`}>
            <h2 className={`${styles.graphic__heading}`}>graphic</h2>
            <span className={`${styles.graphic__heading__design}`}></span>
            <span className={`${styles.graphic__heading__palette}`}></span>
          </div>

          <div className={`${styles.graphic__wrapper}`}>
            <div className={`${styles.graphic__info}`}>
              <h3 className={`${styles.graphic__info__heading}`}>BOX #2</h3>

              <div className={`${styles.graphic__info__inner}`}>
                <h4 className={`${styles.graphic__info__subheading}`}>Дизайн для:</h4>

                <ul className={`${styles.graphic__info__list}`}>
                  <li className={`${styles.graphic__info__item}`}>• Лого</li>
                  <li className={`${styles.graphic__info__item}`}>• Бренд бук</li>
                  <li className={`${styles.graphic__info__item}`}>• Брендинг/Ребрендинг</li>
                  <li className={`${styles.graphic__info__item}`}>• POSM</li>
                  <li className={`${styles.graphic__info__item}`}>• Наружной рекламы</li>
                  <li className={`${styles.graphic__info__item}`}>• Упаковки продукции</li>
                  <li className={`${styles.graphic__info__item}`}>• Постов</li>
                </ul>
              </div>

              <span className={`${styles.graphic__info__image}`}></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Graphic;
