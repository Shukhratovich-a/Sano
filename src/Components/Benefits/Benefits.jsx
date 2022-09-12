import Container from "../Container/Container";
import styles from "../Benefits/Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={`${styles.benefits}`}>
      <Container>
        <div className={`${styles.benefits__heading__top}`}>
          <h2 className={`${styles.benefits__heading__text}`}>5 причин выбраmь нас</h2>
          <span className={`${styles.benefits__heading__subtext}`}>причины выбраmь нас</span>
        </div>
        <ol className={`${styles.benefits__list}`}>
          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№1</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              SANO Agency SMM-агентство с высоким уровнем экспертизы. Мы привлекаем реальных
              клиентов к вашему бизнесу, а не просто клики и пустых подписчиков.
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№2</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Свой штат сотрудников - 5 профессионалов с опытом более 3 лет в сфере SMM продвижения;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№3</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Более 15 успешных и долговременных кейсов за 8 лет продвижения в социальных сетях;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№4</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Постоянное повышение квалификации сотрудников на различных тренингах и вебинарах;
            </p>
          </li>

          <li className={`${styles.benefits__item}`}>
            <div className={`${styles.benefit__top}`}>
              <span className={`${styles.benefit__ordernumber}`}>№5</span>
            </div>
            <p className={`${styles.benefit__text}`}>
              Доступные цены на предоставляемые услуги, при высоком качестве исполнения
            </p>
          </li>
        </ol>
      </Container>
    </section>
  );
};

export default Benefits;
