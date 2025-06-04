import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";

const Alert = ({ message, type = "success", duration = 3000, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onDismiss) {
          onDismiss();
        }
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [message, duration, onDismiss]);

  if (!message || !isVisible) {
    return null;
  }

  const alertClass = `${styles.alert} ${styles[type]}`;

  return (
    <div className={alertClass}>
      <span>{message}</span>
      <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false) || (onDismiss && onDismiss())}
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
