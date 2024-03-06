import React from 'react';
import Button from '../../../components/Button';

interface ButtonMenuProps {
    className?: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = () => {
    return (
        <div className='Button'>
            <Button to='/menu'>
                Menu
            </Button>
        </div>
    )
}
export default ButtonMenu