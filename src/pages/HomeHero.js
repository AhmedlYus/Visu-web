import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';
import WelcomeMs from '../components/WelcomeMs';
import JamesBondVideo from '../assets/JamesBondVideo.mp4'; // Import the video file

const HeroSection = () => {
  return (
    <div className='Hero-Section'>
      <div className='welcomeBox'>
        <WelcomeMs />
        <Link to="/Visu-web/booking/tickets">
        <button className='welcomeButton'>Book your tickets here</button>
        </Link>
      </div>
      <video className='HeroVideo' autoPlay loop muted>
        <source src={JamesBondVideo} type='video/mp4' /> {/* Use the imported variable */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroSection;
