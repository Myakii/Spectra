import React from 'react';
import Button from '../../../components/Button';

interface ButtonPaymentProps {
    className?: string;
}

const ButtonPayment: React.FC<ButtonPaymentProps> = () => {
    return (
        <div className='Button'>
            <Button to='/payment'>
                Confirmation
            </Button>
        </div>
    )
}
export default ButtonPayment