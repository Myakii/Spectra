import React from 'react';

import Logo from '../../assets/img/logo.png';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

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
    return (
        <header>
            <NavBar img={Logo}>
                <li><Link to="/accueil"><span>Accueil</span></Link></li>
                <li><Link to="/carte"><span>Menu</span></Link></li>
                <li><Link to="/#NavFooter" onClick={scrollToFooter}><span>Contact</span></Link></li>
            </NavBar>
        </header>
    );
}

export default Header;

