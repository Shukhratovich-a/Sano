import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useSection from "../../Hooks/useSection";
import useMenu from "../../Hooks/useMenu";

import Nav from "../Nav/Nav";

import Logo from "../Lib/Logo/Logo";
import Burger from "../Lib/Icons/Burger";

import Container from "../Container/Container";

import styles from "./Header.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  const { width } = useWindowDimensions();
  const [, setOpen] = useMenu();
  const [section] = useSection();

  const [small, setSmall] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 10));
    }
  }, []);

  return (
    <header className={`${styles.header} ${small && width > 1140 ? styles["header--small"] : ""}`}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.header__inner}`}>
          <div className={`${styles.header__wrapper}`}>
            <Link className={`${styles.header__link}`} to="hero" offset={-80}>
              <Logo width={width > 550 ? 195 : 182} height={width > 550 ? 48 : 45} />
            </Link>

            {width > 1140 && <Nav />}

            {width <= 1140 && (
              <button
                className={`${styles.header__burger} ${
                  ["graphic", "target", "photo"].includes(section) ? styles["header__burger--yellow"] : ""
                }`}
                onClick={() => setOpen(true)}
              >
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
