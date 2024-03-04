import React from 'react';
import Button from '../../../components/Button';

interface ButtonBookingProps {
    className?: string;
}

const ButtonBooking: React.FC<ButtonBookingProps> = () => {
    return (
        <div className='Button'>
            <Button to='/reservation'>
                Réservation
            </Button>
        </div>
    )
}
export default ButtonBooking