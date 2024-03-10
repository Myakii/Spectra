import React from "react";
import "./css/Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick? : () => void;
}

const Button: React.FC<ButtonProps> = ({ to, children, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`Button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
