import React from "react";
import Button from './Button';
import { useNavigate } from 'react-router-dom';


import "./css/NavBar.css";


interface NavBarProps {
    className?: string;
    children: React.ReactNode;
    img: string;
}

const NavBar: React.FC<NavBarProps> = ({
    className,
    children,
    img,
}) => {
    const navigate = useNavigate();

    function handleClickBooking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        navigate('../booking/booking');
    }

    return (
        <nav>
            <div className={`header-container ${className}`}>
                <Button onClick={handleClickBooking} className='ButtonOpeningHours'>
                    Réservation
                </Button>
                <ul>
                    {children}
                </ul>
                <img src={img} className="logo" alt="Logo" />
            </div>
        </nav>
    );
};

export default NavBar;
