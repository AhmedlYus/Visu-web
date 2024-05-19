import React, { useState } from 'react';
import Logo from '../assets/077Logo.jpeg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css"; 
import { Button } from '@mui/material';

function Navbar() {
  const [showBookingDropdown, setShowBookingDropdown] = useState(false);
  const [showExhibitionDropdown, setShowExhibitionDropdown] = useState(false);
  const [showAllDropdowns, setShowAllDropdowns] = useState(false);

  const toggleBookingDropdown = () => {
    setShowBookingDropdown(!showBookingDropdown);
    setShowAllDropdowns(false); 
  }

  const toggleExhibitionDropdown = () => {
    setShowExhibitionDropdown(!showExhibitionDropdown);
    setShowAllDropdowns(false); // 
  }

  const toggleAllDropdowns = (value) => {
    setShowAllDropdowns(value);
    setShowBookingDropdown(false); 
    setShowExhibitionDropdown(false);
  }

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <Link to="/Visu-web/" className="logoLink">
          <div className='logo'>
            <img src={Logo} alt='Logo' />
            <div className='logoText'>MUSEUM</div>
          </div>
        </Link>
      </div>
      <div className='rightSide'>
        <Link to="/Visu-web/" onMouseEnter={() => toggleAllDropdowns(true)} onMouseLeave={() => toggleAllDropdowns(false)}>Home</Link>
        <div className="dropdown" onMouseEnter={toggleExhibitionDropdown} onMouseLeave={toggleExhibitionDropdown}>
        <Link to="/Visu-web/exhibitions">Exhibition</Link>
          {(showExhibitionDropdown || showAllDropdowns) && (
            <div className="dropdown-content">
            <Link to="/Visu-web/exhibitions/notime">No Time to Die</Link>
            <Link to="/Visu-web/exhibitions/spectre">Spectre</Link>
            <Link to="/Visu-web/exhibitions/casino-royale">Casino Royale</Link>
            <Link to="/Visu-web/exhibitions/solace">Quantum of Solace</Link>
          </div>
          )}
        </div>
        <div className="dropdown" onMouseEnter={toggleBookingDropdown} onMouseLeave={toggleBookingDropdown}>
          <Link to="/Visu-web/booking">Booking</Link>
          {(showBookingDropdown || showAllDropdowns) && (
            <div className="dropdown-content">
              <Link to="/Visu-web/booking/tickets">Tickets</Link>
              <Link to="/Visu-web/booking/rental">Rental</Link>
            </div>
          )}
        </div>
        <Link to="/Visu-web/contact">Contact</Link>
        <Link to="/Visu-web/about">About us</Link>
        <Button>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
