import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        &copy; 2025 Redi School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
