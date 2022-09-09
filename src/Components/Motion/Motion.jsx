import Human from "../../Assets/Images/Motion/Human.png";

import Container from "../Container/Container";

import styles from "./Motion.module.scss";

const Motion = () => {
  return (
    <section className={`${styles.motion}`} id={"motion"}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.motion__inner}`}>
          <img
            className={`${styles.motion__image}`}
            src={Human}
            alt="motion"
            width={1920}
            height={1080}
          />
          {/* 
          <div className={`${styles.motion__inner__top}`}>
            <h2 className={`${styles.motion__heading}`}>motion</h2>
            <span className={`${styles.motion__heading__image}`}></span>
          </div>

          <div className={`${styles.motion__wrapper}`}>
            <div className={`${styles.motion__info}`}>
              <h3 className={`${styles.motion__info__heading}`}>BOX #2</h3>

              <div className={`${styles.motion__info__inner}`}>
                <h4 className={`${styles.motion__info__subheading}`}>Дизайн для:</h4>

                <ul className={`${styles.motion__info__list}`}>
                  <li className={`${styles.motion__info__item}`}>• Лого</li>
                  <li className={`${styles.motion__info__item}`}>• Бренд бук</li>
                  <li className={`${styles.motion__info__item}`}>• Брендинг/Ребрендинг</li>
                  <li className={`${styles.motion__info__item}`}>• POSM</li>
                  <li className={`${styles.motion__info__item}`}>• Наружной рекламы</li>
                  <li className={`${styles.motion__info__item}`}>• Упаковки продукции</li>
                  <li className={`${styles.motion__info__item}`}>• Постов</li>
                </ul>
              </div>

              <span className={`${styles.motion__info__image}`}></span>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Motion;
