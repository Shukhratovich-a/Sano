import { Link } from "react-scroll";

import useMenu from "../../Hooks/useMenu";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Logo from "../Lib/Logo/Logo";
import Close from "../Lib/Icons/Close";

import Container from "../Container/Container";

import styles from "./Menu.module.scss";
import React from "react";

const Menu = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useMenu();

  React.useEffect(() => {
    if (isOpen && width <= 1140) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, width]);

  return (
    <div className={`${styles.menu} ${isOpen ? styles["menu--active"] : ""}`}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.menu__top}`}>
          <Logo width={204} height={55} />

          <button className={`${styles.menu__button}`} onClick={() => setIsOpen(false)}>
            <Close />
          </button>
        </div>

        <ul className={`${styles.menu__list}`}>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"hero"}
              offset={-155}
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link className={`${styles.menu__link}`} to={"target"} onClick={() => setIsOpen(false)}>
              Smm & Target
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"graphic"}
              onClick={() => setIsOpen(false)}
            >
              Graphic Design
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link className={`${styles.menu__link}`} to={"motion"} onClick={() => setIsOpen(false)}>
              Motion Design
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link className={`${styles.menu__link}`} to={"photo"} onClick={() => setIsOpen(false)}>
              Фото и Видео
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"benefits"}
              onClick={() => setIsOpen(false)}
            >
              5 причин выбрать нас
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"founders"}
              onClick={() => setIsOpen(false)}
              offset={60}
            >
              Основатели
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"maps"}
              onClick={() => setIsOpen(false)}
              offset={width > 900 ? -25 : width > 475 ? -54 : width > 375 ? -30 : -20}
            >
              Мы на карте
            </Link>
          </li>
          <li className={`${styles.menu__item}`} onClick={() => setIsOpen(false)}>
            <Link
              className={`${styles.menu__link}`}
              to={"contact"}
              onClick={() => setIsOpen(false)}
              offset={width > 900 ? -200 : width > 700 ? -16 : width > 375 ? -30 : -20}
            >
              Связаться с нами
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Menu;
