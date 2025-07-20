import React from 'react';
import s from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  secondary = false,
  className = '',
}) => {
  const buttonClass = secondary
    ? `${s.button} ${s.secondary}`
    : s.button;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
