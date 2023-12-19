import React from 'react'
import './index.scss'

interface ButtonProps {
  onClick: () => void;
  text: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, isDisabled = false }) => (
  <button className="button" onClick={() => !isDisabled && onClick()} disabled={isDisabled}>
    {text}
  </button>
);

export default Button;
