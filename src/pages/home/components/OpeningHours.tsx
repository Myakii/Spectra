// OpeningHours.tsx
import React from 'react';
import BlockImageText from '../../../components/BlockImageL';
import ButtonBooking from './ButtonBooking.tsx';


interface OpeningHoursProps {
    className?: string;
}

const OpeningHours: React.FC<OpeningHoursProps> = () => {

    return (
        <div className='OpeningHours'>
            <BlockImageText img="src/assets/img/openingHours.jpg">
                <div className='BlockOpeningHours'>
                    <h2>Heure d'ouverture</h2>
                    <p>Lundi - Vendredi : 10h00 - 23h30</p>
                    <p>Samedi - Dimanche : 11h00 - 00h30</p>
                    <ButtonBooking/>
                </div>
            </BlockImageText>
        </div>
    );
}

export default OpeningHours;
