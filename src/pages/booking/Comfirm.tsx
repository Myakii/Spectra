import React from 'react';
import './css/Confirm.css';

interface ConfirmProps {
    className?: string,
}

const Confirm: React.FC<ConfirmProps> = () => {
    setTimeout(function () {
        window.location.replace('/reservation')
    }, 5000);

    return (
        <div id='confirm-container'>
            <div className="typing-indicator">
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
            </div>
            <h2> Votre réservation a bien été pris en compte. </h2>
            <p> Vous allez être rediriger vers la page de réservation. </p>
        </div>
    );
}

export default Confirm;
