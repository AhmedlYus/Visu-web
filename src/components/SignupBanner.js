import React, { useState } from 'react';
import bondBanner from '../assets/BondBanner.jpg';
import "../styles/SignupBanner.css";

function SignupBanner() {
  const [showForm, setForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showForm) {
        setEmail('');
        console.log('submited', email);
        setForm(false);
    } else {
        setForm(true);
    }
  };

  return (
    <div>
      <div className='BannerContainer'>
        <img src={bondBanner} alt='banner' className='bannerImge' />
        <h2 className='newsletter-text'>Sign up for newsletter click button below</h2>
        <button className="newsletterButton" onClick={handleSubmit}>
            {showForm ? 'Sign up' : 'sign up for our newsletter'}</button>
        {showForm && (
          <form className='newsletterForm' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='    Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default SignupBanner;
