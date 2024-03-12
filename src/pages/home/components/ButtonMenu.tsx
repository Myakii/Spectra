import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

interface ButtonMenuProps {
    className?: string;
    type?: string;
    onClick? : () => void;
    to: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ className, to }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(to);
    };
  
    return (
      <Button to={'/carte'} className={`button ${className}`} onClick={handleClick}>
        Menu
      </Button>
    );
  };
export default ButtonMenu;
