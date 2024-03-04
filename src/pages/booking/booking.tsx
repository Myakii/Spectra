import React from 'react'

import './css/Booking.css'

interface BookingProps {
  className?: string,
}

const Booking: React.FC<BookingProps> = () => {

  return (
    <div id='Booking-container'>
      <div className='Booking-Form'>
        <h2>Formulaire de réservation</h2>
      </div>
    </div >
  );
}

export default Booking;
