import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage';

interface LocationContextProps {
    className?: string
}

const ProtectedLink: React.FC<LocationContextProps> = ({}) => {
    return (
        <div className='Protect-link'>
            <Link to=''></Link>
        </div>
    )
}

export default ProtectedLink