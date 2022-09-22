import Container from "../Container/Container";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={`${styles.contact}`} id={"contact"}>
      <Container>
        <div className={styles.contact__box}>
          <div className={styles.contact__left}>
            <p className={styles.contact__heading}>Мы на карте</p>
            <iframe
              className={styles.contact_maps}
              src="https://yandex.uz/map-widget/v1/-/CCUVBYVd9B"
              width="665"
              height="487"
              title="yandex-map"
            ></iframe>
          </div>

          <div className={styles.contact__right}>
            <p className={styles.contact__heading}>Связаться с нами</p>

            <form className={styles.contact__form}>
              <div className={styles.contact__inputs__box}>
                <input placeholder="Имя" className={styles.contact__input} type="text" />
                <input placeholder="Фамилия" className={styles.contact__input} type="text" />
                <input placeholder="E-mail" className={styles.contact__input} type="mail" />
                <input placeholder="Телефон" className={styles.contact__input} type="number" />
                <input placeholder="Наименование организации" className={styles.contact__input} type="text" />
                <textarea
                  placeholder="Ваше сообщение"
                  className={styles.contact__input}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className={styles.contact__btn} type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
