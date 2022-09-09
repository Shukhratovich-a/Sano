import React from "react";
import { Link } from "react-scroll";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.nav__list}`}>
        <li className={`${styles.nav__item}`}>
          <Link
            className={`${styles.nav__link}`}
            activeClass={`${styles["nav__link--active"]}`}
            to="hero"
            offset={-80}
            spy={true}
            // smooth={true}
          >
            Главная
          </Link>
        </li>

        <li className={`${styles.nav__item}`}>
          <Link
            className={`${styles.nav__link}`}
            activeClass={`${styles["nav__link--active"]}`}
            to="target"
            spy={true}
            // smooth={true}
          >
            Smm & Target
          </Link>
        </li>

        <li className={`${styles.nav__item}`}>
          <Link
            className={`${styles.nav__link}`}
            activeClass={`${styles["nav__link--active"]}`}
            to="graphic"
            spy={true}
            // smooth={true}
          >
            Graphic Design
          </Link>
        </li>

        <li className={`${styles.nav__item}`}>
          <Link
            className={`${styles.nav__link}`}
            activeClass={`${styles["nav__link--active"]}`}
            to="motion"
            spy={true}
            smooth={true}
          >
            Motion Design
          </Link>
        </li>

        <li className={`${styles.nav__item}`}>
          <Link
            className={`${styles.nav__link}`}
            activeClass={`${styles["nav__link--active"]}`}
            to="photos"
            spy={true}
            smooth={true}
          >
            Фото и Видео
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
