import React, { useState, ChangeEvent } from 'react';

import './css/Booking.css';

interface BookingProps {
  className?: string,
}

const Booking: React.FC<BookingProps> = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleRequirementsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRequirements(event.target.value);
  };


  return (
    <div id='Booking-container'>
      <div className='Booking-Form'>
        <h2>Formulaire de réservation</h2>
        <p>Nous tenons à rappeler à nos clients qu'en cas d'absence à une réservation confirmée, des <span style={{ color: 'goldenrod' }}>frais d'annulation</span> peuvent être appliqués. Merci de bien vouloir nous contacter en cas d'imprévu afin que nous puissions ajuster votre réservation en conséquence.</p>
        <input type='email' placeholder='Votre mail' className='email' value={email} onChange={handleEmailChange} required />
        <input type='text' placeholder='Votre numéro de téléphone' className='phone' value={phone} onChange={handlePhoneChange} required />
        <input type="date" id="start" name="trip-start" value={date} min="2018-01-01" max="2024-12-30" className='date' onChange={handleDateChange} required />
        <textarea placeholder='Avez-vous des exigences particulières?' value={requirements} onChange={handleRequirementsChange} rows={20}></textarea>
        <button type='submit'>Confirmer</button>
      </div>
    </div>
  );
}

export default Booking;
