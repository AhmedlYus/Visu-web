import React from 'react'
import '../styles/BookingSite.css';


function BookingRental() {
  return (
    <div className="booking-container">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <p className="text">
            Aston Martin prices
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>Starting / Minimum price : 3000SEK</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>Hourly prices 1500SEK </p>
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
            <h3 className="title">Book rental</h3>
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
}

export default BookingRental;
