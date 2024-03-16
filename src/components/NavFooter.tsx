import React from "react";
import "./css/NavFooter.css";


interface NavFooterProps {
    className?: string;
    children: React.ReactNode;
}

const NavFooter: React.FC<NavFooterProps> = ({
    className,
    children,
}) => {
    return (
        <div className={`footer-container ${className}`}>
            {children}
        </div>
    );
};

export default NavFooter;
