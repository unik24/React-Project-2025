import React from 'react';
import './my-button.css';

const MyButton = ({
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

export default MyButton;
