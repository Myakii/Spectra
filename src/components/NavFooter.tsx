import React from "react";
import "./css/NavFooter.css";


interface NavFooterProps {
    className?: string;
    children: React.ReactNode;
    img?: string;
}

const NavFooter: React.FC<NavFooterProps> = ({
    className,
    children,
    // img,
}) => {
    return (
        <div className={`footer-container ${className}`}>
            {children}
            {/* <img src={img} className="logo" alt="Logo" /> */}
        </div>
    );
};

export default NavFooter;
