import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer-row"]}>
          <div className={styles["footer__copyright"]}>
            © 2015-2019 Fotoprokat24
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
