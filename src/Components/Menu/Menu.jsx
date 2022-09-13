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
      <Container>
        <div className={`${styles.menu__top}`}>
          <Logo width={204} height={55} />

          <button className={`${styles.menu__button}`} onClick={() => setIsOpen(false)}>
            <Close />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
