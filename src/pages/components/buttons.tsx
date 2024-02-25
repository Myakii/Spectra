import React from 'react'

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;