import React, { useState, ChangeEvent } from 'react';

import './css/Booking.css';
import Logo from '../../assets/img/logo.png';

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
        <img src={Logo} alt='Logo' />
        <h2>Formulaire de réservation</h2>
        <input type='email' placeholder='Votre mail' className='email' value={email} onChange={handleEmailChange} required />
        <input type='text' placeholder='Votre numéro de téléphone' className='phone' value={phone} onChange={handlePhoneChange} required />
        <input type="date" id="start" name="trip-start" value={date} min="2018-01-01" max="2018-12-31" className='date' onChange={handleDateChange} required />
        <textarea placeholder='Avez-vous des exigences particulières?' value={requirements} onChange={handleRequirementsChange}></textarea>
      </div>
      <button type='submit'>Confirmer</button>
    </div>
  );
}

export default Booking;
