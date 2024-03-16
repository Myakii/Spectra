import React, { useState, ChangeEvent, useEffect } from 'react';
import './css/Booking.css';
import Button from '../../components/Button';

interface BookingProps {
  className?: string,
}

const Booking: React.FC<BookingProps> = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [requirements, setRequirements] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    checkAllFieldsFilled();
  };

  const checkAllFieldsFilled = () => {
    if (!email || !phone || !date || !requirements) {
      setErrorMessage('');
    } else {
      setErrorMessage('');
      setRedirectToConfirmation(true);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      checkAllFieldsFilled();
    }
  }, [email, phone, date, requirements, formSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <div id='Booking-container'>
        <div className='Booking-Form'>
          <h2>Formulaire de réservation</h2>
          {formSubmitted && errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Nous tenons à rappeler à nos clients qu'en cas d'absence à une réservation confirmée, des <span style={{ color: 'goldenrod' }}>frais d'annulation</span> peuvent être appliqués. Merci de bien vouloir nous contacter en cas d'imprévu afin que nous puissions ajuster votre réservation en conséquence.</p>
          <label>Adresse mail : </label>
          <input type='email' placeholder='info@sceptra.com' className='email' value={email} onChange={handleEmailChange} required />
          <label>Numéro de téléphone : </label>
          <input type='tel' placeholder='0123456789' className='phone' pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" value={phone} onChange={handlePhoneChange} required />
          <label>Date de réservation : </label>
          <input type="date" placeholder="Sélectionnez une date" className='date' value={date} onChange={handleDateChange} required/>
          <label>Avez-vous des exigences ?</label>
          <textarea placeholder='Je suis allergique à la tomate...' value={requirements} onChange={handleRequirementsChange} rows={20} required></textarea>
          {redirectToConfirmation ? (
            <Button to='/5215231851232455'>
              Confirmation
            </Button>
          ) : (
            <Button to="" type='submit'>
              Confirmation
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

export default Booking;
