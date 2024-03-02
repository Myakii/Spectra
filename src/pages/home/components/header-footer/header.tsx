import React from 'react';

import Logo from '../../../../assets/img/logo.png';
import NavBar from '../../../../components/NavBar';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <NavBar img={Logo}>
                <li><a href="#"><span>Accueil</span></a></li>
                <li><a href="#"><span>Menu</span></a></li>
                <li><a href="#"><span>Contact</span></a></li>
            </NavBar>
        </header>
    );
}

export default Header;

