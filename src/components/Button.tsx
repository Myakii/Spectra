import React from "react";
import "./css/Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick? : () => void;
  type?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ to, children, className, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`Button ${className}`} onClick={handleClick} type="submit" disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
