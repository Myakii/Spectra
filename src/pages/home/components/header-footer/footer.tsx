import React from 'react';
import NavFooter from '../../../../components/NavFooter';
import Button from '../../../../components/Button.tsx';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = () => {
    const navigate = useNavigate();

    function handleClickBooking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        navigate('../booking/booking');
    }
    return (
        <footer>
            <NavFooter>
                <div className='NavFooter'>
                    <div className='FirstCol'>
                        <h2>info@recrutement.com</h2>
                    </div>
                    <div className='MainCol'>
                        <p className='Phone'>Téléphone: 01-23-45-67-89 </p>
                        <div className='BlockAdress'>
                            <p className='Adress'>123 Rue de Rivoli</p>
                            <p className='Zipcode'>75001 Paris </p>
                        </div>
                        <div className='BlockHours'>
                            <p className='OpeningHours1'>Lundi - Vendredi : 10h00 - 23h30</p>
                            <p className='OpeningHours2'> Samedi - Dimanche : 11h00 - 00h30</p>
                        </div>
                        <Button onClick={handleClickBooking} className='ButtonOpeningHours'>
                            Réservation
                        </Button>
                    </div>
                </div>
                <div className='BottomCol'>
                    <div className='Copyright'>
                        <p>Spectra © 2024 Tous droits réservés.</p>
                    </div>
                </div>
            </NavFooter>
        </footer >
    );
}

export default Footer;

