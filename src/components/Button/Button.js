import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  buttonType = "primary",
  buttonSize = "medium",
  buttonDisabled = false,
  className: externalClassName,
}) => {
  const className = [
    styles.btn,
    styles[buttonType],
    styles[buttonSize],
    buttonDisabled ? styles.disabled : "",
    externalClassName,
  ].join(" ");

  return (
    <button
      onClick={buttonDisabled ? null : onClick}
      className={className}
      disabled={buttonDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
