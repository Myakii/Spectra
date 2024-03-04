import React from "react";

import "./css/NavBar.css";
import ButtonBooking from "../pages/home/components/ButtonBooking";


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

    return (
        <nav>
            <div className={`header-container ${className}`}>
                <ButtonBooking />
                <ul>
                    {children}
                </ul>
                <img src={img} className="logo" alt="Logo" />
            </div>
        </nav>
    );
};

export default NavBar;
