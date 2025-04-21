import React from 'react';
import "./button.css";

const Button = ({
  children,
  buttonType = 'primary',
  buttonSize = 'medium',
  buttonDisabled = false
}) => {
  const className = `btn ${buttonType} ${buttonSize}`;

  return (
    <button className={className} disabled={buttonDisabled}>
      {children}
    </button>
  );
};

export default Button;
