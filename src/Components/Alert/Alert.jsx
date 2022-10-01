import Close from "../Lib/Icons/Close";

import styles from "./Alert.module.scss";

const Alert = ({ children, className = "", type = "success", isOpen = false, setOpen }) => {
  return (
    <div
      className={`${styles.alert} ${isOpen ? styles["alert--open"] : ""} ${
        type === "danger"
          ? styles["alert--danger"]
          : type === "success"
          ? styles["alert--success"]
          : ""
      } ${className}`}
    >
      <span>{children}</span>

      <button className={`${styles.alert__close}`} onClick={() => setOpen(false)}>
        <Close />
      </button>
    </div>
  );
};

export default Alert;
