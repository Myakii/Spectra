import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import ButtonBooking from '../home/components/ButtonBooking';
import '../css/NavBar.css';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    const scrollToFooter = () => {
        const footer = document.getElementById('NavFooter');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <header>
            <nav>
                <div className='header-container'>
                    <ButtonBooking/>
                    <ul>
                        <li><Link to="/accueil"><span>Accueil</span></Link></li>
                        <li><Link to="/carte"><span>Menu</span></Link></li>
                        <li><Link to="#NavFooter" onClick={scrollToFooter}><span>Contact</span></Link></li>
                    </ul>
                    <div className={`burger ${isMenuOpen ? 'open' : ''}`} id="burger" onClick={toggleMenu}>
                        <input type="checkbox" id="burger" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
            </nav>
            <div className="mobile-menu" onClick={handleModalClick}>
                {isMenuOpen && (
                    <div className='mobile-menu-container'>
                        <div className="overlay" onClick={toggleMenu}>
                            {/* Fenêtre modale pour le menu mobile */}
                            <ul>
                                <li><Link to="/accueil" onClick={toggleMenu}><span>Accueil</span></Link></li>
                                <li><Link to="/carte" onClick={toggleMenu}><span>Menu</span></Link></li>
                                <li><Link to="#NavFooter" onClick={scrollToFooter}><span>Contact</span></Link></li>
                            </ul>
                            <ButtonBooking />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
