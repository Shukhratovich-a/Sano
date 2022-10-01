import React from "react";
import { Link } from "react-scroll";

import useScroll from "../../Hooks/useScroll";

import Socials from "../Socials/Socials";

import Logo from "../Lib/Logo/Logo";
import Phone from "../Lib/Icons/Phone";
import Message from "../Lib/Icons/Message";
import Location from "../Lib/Icons/Location";

import Container from "../Container/Container";

import styles from "./Footer.module.scss";

const Footer = () => {
  const ref = React.useRef(null);

  useScroll("footer", ref);

  return (
    <footer className={styles.footer} id={"footer"} ref={ref}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.footer__logo__block}`}>
          <Link className={`${styles.footer__link}`} to="hero" offset={-80}>
            <Logo width={304} height={75} />
          </Link>

          <Socials className={`${styles.footer__socials}`} />
        </div>

        <div className={`${styles.footer__nav}`}>
          <h5 className={`${styles.footer__heading}`}>Карта сайта</h5>

          <ul className={`${styles.footer__list}`}>
            <li className={`${styles.footer__item}`}>
              <Link
                className={`${styles.footer__nav__link} ${styles.footer__text}`}
                to="hero"
                offset={-155}
              >
                Главная
              </Link>
            </li>
            <li className={`${styles.footer__item}`}>
              <Link className={`${styles.footer__nav__link} ${styles.footer__text}`} to="target">
                Smm & Target
              </Link>
            </li>
            <li className={`${styles.footer__item}`}>
              <Link className={`${styles.footer__nav__link} ${styles.footer__text}`} to="graphic">
                Graphic Design
              </Link>
            </li>
            <li className={`${styles.footer__item}`}>
              <Link className={`${styles.footer__nav__link} ${styles.footer__text}`} to="motion">
                Motion Design
              </Link>
            </li>
            <li className={`${styles.footer__item}`}>
              <Link className={`${styles.footer__nav__link} ${styles.footer__text}`} to="photo">
                Фото и Видео
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.footer__about}`}>
          <h5 className={`${styles.footer__heading}`}>О нас</h5>

          <p className={`${styles.footer__text}`}>
            SANO Aency – команда, которая стоит у истоков развития диджитал-услуг в Узбекистане. У
            нас вы гарантированно получите персональный анализ вашего бизнеса, разработку стратегии
            развития и результат в виде коммерческого успеха.
          </p>
        </div>

        <div className={`${styles.footer__contacts}`}>
          <h5 className={`${styles.footer__heading}`}>Контакты</h5>

          <ul className={`${styles.footer__list}`}>
            <li className={`${styles.footer__item}`}>
              <a
                className={`${styles.footer__contact__link} ${styles.footer__text}`}
                href="tel:+998995211021"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Phone />
                <span>+998 99 521 10 21</span>
              </a>
            </li>
            <li className={`${styles.footer__item}`}>
              <a
                className={`${styles.footer__contact__link} ${styles.footer__text}`}
                href="mailto:sanoagcy@gmail.com"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Message />
                <span>sanoagcy@gmail.com</span>
              </a>
            </li>
            <li className={`${styles.footer__item}`}>
              <a
                className={`${styles.footer__contact__link} ${styles.footer__text}`}
                href="mailto:sanoagcy@gmail.com"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Location />
                <span>Узбекистан, г. Ташкент.</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
