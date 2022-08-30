import React from "react";

// import useWindowDimensions from "../../Hooks/useWindowDimensions";

import TargetImage from "../../Assets/Images/Target/Main.webp";

import Container from "../Container/Container";

import styles from "./Target.module.scss";

const Target = () => {
  // const { width } = useWindowDimensions();

  return (
    <section className={`${styles.target}`} id={"target"}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.target__inner}`}>
          <img
            className={`${styles.target__image}`}
            src={TargetImage}
            alt=""
            width={1014}
            height={816}
          />

          <h2 className={`${styles.target__heading}`}>SMM TARGET</h2>
        </div>
      </Container>
    </section>
  );
};

export default Target;
