import React from 'react';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';

interface ButtonBookingProps {
    className?: string;
}

const ButtonBooking: React.FC<ButtonBookingProps> = () => {
    const navigate = useNavigate();

    function handleClickBooking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        navigate('../../booking/booking');
    }
    return (
        <Button onClick={handleClickBooking} className='ButtonOpeningHours'>
            Réservation
        </Button>
    )
}
export default ButtonBooking