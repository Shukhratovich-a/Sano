import Logo from "../Lib/Logo/Logo";

import Container from "../Container/Container";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.footer__inner}`}>
          <Logo width={304} height={75} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
