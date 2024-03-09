import React, { useState } from 'react';
import './css/LocationContext.css';
import '../pages/booking/components/NotFoundPage';

interface LocationContextProps {
    className?: string
    children: React.ReactNode;
    to: string;
    type?: string;
}

const LocationContext: React.FC<LocationContextProps> = ({ children }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed(true);
    };

    return (
        <div className='Form-with-protect-link'>
            <form>
                {children}
                <button type='button' onClick={handleConfirm}>{children}</button>
            </form>
        </div>
    );
};

export default LocationContext;