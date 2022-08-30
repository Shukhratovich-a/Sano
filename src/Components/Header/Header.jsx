import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Nav from "../Nav/Nav";

import Logo from "../Lib/Logo/Logo";
import Burger from "../Lib/Icons/Burger";

import Container from "../Container/Container";

import styles from "./Header.module.scss";

const Header = () => {
  const { width } = useWindowDimensions();

  const [small, setSmall] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const app = document.querySelector(".app");

      app.addEventListener("scroll", () => setSmall(app.scrollTop > 100));
    }
  }, []);

  return (
    <header className={`${styles.header} ${small ? styles["header--small"] : ""}`}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.header__inner}`}>
          <div className={`${styles.header__wrapper}`}>
            <Logo width={width > 550 ? 195 : 182} height={width > 550 ? 48 : 45} />

            {width > 1150 && <Nav />}

            {width <= 1150 && (
              <button className={`${styles.header__burger}`}>
                <Burger />
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
