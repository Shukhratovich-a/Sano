import React from "react";
import { IMaskInput } from "react-imask";

import { HOST } from "../../config";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useScroll from "../../Hooks/useScroll";

import Circle from "../Lib/Icons/Circle";
import Loading from "../Lib/Loading/Loading";

import Container from "../Container/Container";

import styles from "./Contact.module.scss";

const Contact = () => {
  const { width } = useWindowDimensions();
  const [isLoading, setLoading] = React.useState(false);
  const ref = React.useRef(null);

  useScroll("founders", ref);

  const handleSubmit = async (evt) => {
    setLoading(true);

    evt.preventDefault();

    const { firstname, surname, mail, phone, organization, message } = evt.target.elements;

    const body = {
      firstname: firstname.value.trim(),
      surname: surname.value.trim(),
      mail: mail.value.trim(),
      phone: phone.value.trim().split("+").join("").split(" ").join(""),
    };

    if (organization.value.trim().length > 2) body.organization = organization.value.trim();
    if (message.value.trim().length > 2) body.message = message.value.trim();

    const response = await fetch(HOST + "/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.status === 202) {
      setLoading(false);
    } else if (data.status === 401) {
      setLoading(false);
    }
    console.log(data);
  };

  return (
    <section className={`${styles.contact}`} ref={ref}>
      <Container className={`${styles.container}`}>
        {width <= 900 ? (
          <Circle className={`${styles.contact__circle}`} width={1245} height={1245} />
        ) : null}

        <div className={`${styles.contact__box}`}>
          <div className={`${styles.contact__left}`} id={"maps"}>
            <p className={`${styles.contact__heading}`}>Мы на карте</p>

            <iframe
              className={`${styles.contact__map}`}
              src="https://yandex.uz/map-widget/v1/-/CCUVBYVd9B"
              width="665"
              height="487"
              title="yandex-map"
              state={{ center: "center", zoom: "zoom", behaviors: ["disable('scrollZoom')"] }}
            ></iframe>
          </div>

          <div className={`${styles.contact__right}`} id={"contact"}>
            <p className={`${styles.contact__heading}`}>Связаться с нами</p>

            <form className={`${styles.contact__form}`} onSubmit={handleSubmit}>
              <div className={`${styles.contact__inputs__box}`}>
                <input
                  placeholder="Имя"
                  className={`${styles.contact__input}`}
                  type="text"
                  name="firstname"
                />
                <input
                  placeholder="Фамилия"
                  className={`${styles.contact__input}`}
                  type="text"
                  name="surname"
                />
                <input
                  placeholder="E-mail"
                  className={`${styles.contact__input}`}
                  type="mail"
                  name="mail"
                />
                <IMaskInput
                  className={`${styles.contact__input}`}
                  name="phone"
                  mask={"+{998} 00 000 00 00"}
                  placeholder="Телефон"
                />
                <input
                  placeholder="Наименование организации"
                  className={`${styles.contact__input}`}
                  type="text"
                  name="organization"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  className={`${styles.contact__input}`}
                  cols="30"
                  rows="10"
                  name="message"
                ></textarea>
              </div>

              <button className={`${styles.contact__btn}`} type="submit">
                {!isLoading && <span>Отправить</span>}
                {isLoading && <Loading />}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
