import React from 'react'
import './footer.css';
import Button from '../components/button';
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
            <div className='bottombar'>
                <div className='firstbar'>
                    <h2>info@spectra.com</h2>
                </div>
                <div className='mainbar'>
                    <p className='phone'>Téléphone: 01-23-45-67-89 </p>
                    <div className='blockadress'>
                        <p className='adress'>123 Rue de Rivoli</p>
                        <p className='zipcode'>75001 Paris </p>
                    </div>
                    <div className='blockhours'>
                        <p className='openinghourse1'>Lundi - Vendredi : 10h00 - 23h30</p>
                        <p className='openinghourse2'> Samedi - Dimanche : 11h00 - 00h30</p>
                    </div>
                    <Button onClick={handleClickBooking} className='ButtonOpeningHours'>Réservation</Button>
                </div>
            </div>
            <div className='copyright'>
                <p>Spectra © 2024 Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;

