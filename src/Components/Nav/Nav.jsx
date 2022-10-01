import React from "react";
import { Link } from "react-scroll";

import nav from "../../Datas/Nav";

import useSection from "../../Hooks/useSection";

import styles from "./Nav.module.scss";

const Nav = () => {
  const [section] = useSection();

  return (
    <nav
      className={`${styles.nav} ${
        ["graphic", "photo"].includes(section)
          ? styles["nav--white"]
          : section === "motion"
          ? styles["nav--yellow"]
          : ""
      }`}
    >
      <ul className={`${styles.nav__list}`}>
        {nav.length > 0 &&
          nav.map((navItem) => (
            <li className={`${styles.nav__item}`} key={navItem.id}>
              <Link
                className={`${styles.nav__link}`}
                activeClass={`${styles["nav__link--active"]}`}
                to={navItem.name}
                offset={navItem.offset}
                spy={true}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
