import Human from "../../Assets/Images/Photo/Human.png";

// import Circle from "../Lib/Icons/Circle";

import Container from "../Container/Container";

import styles from "./Photo.module.scss";

const Photo = () => {
  return (
    <section className={`${styles.photo}`} id={"photo"}>
      <Container className={`${styles.container}`}>
        {/* <Circle className={`${styles.photo__circle}`} width={550} height={550} /> */}

        <div className={`${styles.photo__inner}`}>
          <img
            className={`${styles.photo__image}`}
            src={Human}
            alt="photo"
            width={1920}
            height={1080}
          />

          {/* <div className={`${styles.photo__inner__top}`}>
            <h2 className={`${styles.photo__heading}`}>photo</h2>
            <span className={`${styles.photo__heading__design}`}></span>
            <span className={`${styles.photo__heading__move}`}></span>
          </div>

          <div className={`${styles.photo__wrapper}`}>
            <div className={`${styles.photo__info}`}>
              <h3 className={`${styles.photo__info__heading}`}>BOX #3</h3>

              <div className={`${styles.photo__info__inner}`}>
                <h4 className={`${styles.photo__info__subheading}`}>photo design для:</h4>

                <ul className={`${styles.photo__info__list}`}>
                  <li className={`${styles.photo__info__item}`}>• Логотипов / слоганов</li>
                  <li className={`${styles.photo__info__item}`}>• SMM постов</li>
                  <li className={`${styles.photo__info__item}`}>• Сайтов</li>
                  <li className={`${styles.photo__info__item}`}>• LED экранов</li>
                  <li className={`${styles.photo__info__item}`}>• Телевидении</li>
                </ul>
              </div>

              <span className={`${styles.photo__info__image}`}></span>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Photo;
