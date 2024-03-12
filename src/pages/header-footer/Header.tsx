import React from 'react';

import Logo from '../../assets/img/logo.png';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <NavBar img={Logo}>
                <li><Link to="/accueil"><span>Accueil</span></Link></li>
                <li><Link to="/carte"><span>Menu</span></Link></li>
                <li><a href="#"><span>Contact</span></a></li>
            </NavBar>
        </header>
    );
}

export default Header;

