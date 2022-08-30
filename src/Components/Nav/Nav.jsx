import React from "react";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.nav__list}`}>
        <li className={`${styles.nav__item}`}>
          <a className={`${styles.nav__link} ${styles["nav__link--active"]}`} href="#link">
            Главная
          </a>
        </li>

        <li className={`${styles.nav__item}`}>
          <a className={`${styles.nav__link}`} href="#link">
            Smm & Target
          </a>
        </li>

        <li className={`${styles.nav__item}`}>
          <a className={`${styles.nav__link}`} href="#link">
            Graphic Design
          </a>
        </li>

        <li className={`${styles.nav__item}`}>
          <a className={`${styles.nav__link}`} href="#link">
            Motion Design
          </a>
        </li>

        <li className={`${styles.nav__item}`}>
          <a className={`${styles.nav__link}`} href="#link">
            Фото и Видео
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
