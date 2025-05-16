import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  buttonType = 'primary',
  buttonSize = 'medium',
  buttonDisabled = false,
}) => {
  const className = [
    styles.btn,
    styles[buttonType],
    styles[buttonSize],
    buttonDisabled ? styles.disabled : ''
  ].join(' ');

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
