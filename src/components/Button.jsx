import React from "react";
//import './Button.css'; // CSS file

const Button = ({
  children,
  onClick,
  buttonType = "primary",
  buttonSize = "medium",
  buttonDisabled = false,
}) => {
  const className = `btn ${buttonType} ${buttonSize} ${
    buttonDisabled ? "disabled" : ""
  }`;

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
