import React from 'react';
import '../styles/BookingSite.css';

const BookingForm = () => {
  return (
    <div className="container">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <p className="text">
            Ticket prices
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>Adult : 250SEK</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>Children :200SEK under 4 - free</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p>Wine and champaige tasting +18 <br></br> 
              Booking only through reception desk </p>
              
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Book tickets</h3>
            <div className="input-container">
            <label htmlFor="adults">Adults</label>
              <input type="number" name="adults" id='adults' className="input" placeholder="Adults" />
            </div>
            <div className="input-container">
            <label htmlFor="children">Children</label>
              <input type="number" name="adults" id='children' className="input" placeholder="Children" />
            </div>
            <div className="input-container">
            <input type="date" id="date" name="date" className="input" />
            </div>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder="Name" />
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder="Email" />
            </div>
            
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

