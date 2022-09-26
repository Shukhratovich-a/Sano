import Telegram from "../Lib/Social/Telegram";
import Instagram from "../Lib/Social/Instagram";
import Behance from "../Lib/Social/Behance";

import styles from "./Socials.module.scss";

const Socials = ({ className }) => {
  return (
    <div className={`${styles.socials} ${className}`}>
      <ul className={`${styles.socials__list}`}>
        <li className={`${styles.social}`}>
          <a
            className={`${styles.social__link}`}
            href="https://t.me/sanoportfolio"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Telegram />
          </a>
        </li>
        <li className={`${styles.social}`}>
          <a
            className={`${styles.social__link}`}
            href="https://www.instagram.com/sano_agency"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Instagram />
          </a>
        </li>
        <li className={`${styles.social}`}>
          <a
            className={`${styles.social__link}`}
            href="https://www.behance.net/sanoagency"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Behance />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
