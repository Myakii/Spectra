import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

interface ButtonBookingProps {
    className?: string;
    type?: string;
    onClick? : () => void;
    to: string;
}

const ButtonBooking: React.FC<ButtonBookingProps> = ({ className, to }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(to);
    };
  
    return (
      <Button to={'/booking'} className={`button ${className}`} onClick={handleClick}>
        Réservation
      </Button>
    );
  };
export default ButtonBooking;
