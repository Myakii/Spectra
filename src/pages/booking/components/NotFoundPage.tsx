import React from 'react';
import '../css/NotFoundPage.css';
import './NotFoundPage';

interface LocationContextProps {
    className?: string
}

const NotFoundPage: React.FC<LocationContextProps> = () => {
    return (
        <div className='Not-found-page'>
            404
        </div>
    )
}
export default NotFoundPage;