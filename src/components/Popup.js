import React, { useState, useEffect } from 'react';
import '../styles/popup.css';
import popupimg from '../assets/popupimg.jpg';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ trigger, setTrigger, children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClose = () => {
    setTrigger(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position > 400) {
        setShowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function FormComponent({ onSubmit }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    };

    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="signupInput" className="sr-only"></label>
        <input type="text" placeholder="Email@Example.com" name="signup" className="form-input" id="signupInput" />
        <button type="submit" className="submit-button">Sign up</button>
      </form>
    );
  }

  return trigger && showPopup ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={handleClose}><CloseIcon /></button>
        {children}
        {showPopup && (
          <section className="main-section">
            <article className="article">
              <div className="content-column">
                <header>
                  <h1 className="service-heading">Newsletter</h1>
                </header>
                <p className="product-description">Sign up today and get 20% discount on tickets</p>
                <FormComponent onSubmit={handleClose} />
              </div>
              <figure className="image-column">
                <img loading="lazy" src={popupimg} className="product-image" alt="Popup" />
              </figure>
            </article>
          </section>
        )}
      </div>
    </div>
  ) : null;
};

export default Popup;
