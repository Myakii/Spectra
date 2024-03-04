import React from "react";
import "./css/Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to: string
}

const Button: React.FC<ButtonProps> = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default Button;
