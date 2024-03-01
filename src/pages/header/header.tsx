import React from 'react';
import './header.css';
import Button from '../components/button';
import Logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    const navigate = useNavigate();

    function handleClickBooking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        navigate('../booking/booking');
    }

    return (
        <header>
            <nav>
                <div className="topbar">
                    <Button onClick={handleClickBooking} className='ButtonBooking'>Réservation</Button>
                </div>
                <ul> {/* Utilisez ul pour les listes ordonnées */}
                    <li><a href="home.html">Accueil</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="about.html">À propos</a></li>
                </ul>
                <img src={Logo} className="logo" alt="Logo" />
            </nav>
        </header>
    );
}

export default Header;

