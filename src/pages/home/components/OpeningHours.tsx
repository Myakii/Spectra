// OpeningHours.tsx
import React from 'react';
import BlockImageText from '../../../components/BlockImageL';
import Button from '../../../components/Button.tsx';

import './css/OpeningHours.css';
import { useNavigate } from 'react-router-dom';

interface OpeningHoursProps {
    className?: string;
}

const OpeningHours: React.FC<OpeningHoursProps> = () => {
    const navigate = useNavigate();

    function handleClickBooking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        navigate('../booking/booking');
    }

    return (
        <div className='OpeningHours'>
            <BlockImageText img="src/assets/img/openingHours.jpg">
                <div className='BlockOpeningHours'>
                    <h2>Heure d'ouverture</h2>
                    <p>Lundi - Vendredi : 10h00 - 23h30</p>
                    <p>Samedi - Dimanche : 11h00 - 00h30</p>
                    <Button onClick={handleClickBooking} className='ButtonOpeningHours'>
                        Réservation
                    </Button>
                </div>
            </BlockImageText>
        </div>
    );
}

export default OpeningHours;
