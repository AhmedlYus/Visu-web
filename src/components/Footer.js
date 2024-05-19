import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logofooter from '../assets/077Logo.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
        <div className='sb__footer-links-div'>
        <div className='sb__navlogo'>
          <Link to="/"><img src={Logofooter} className='logofooter' alt='Logo' />
        <h1 className='logoText-footer'>MUSEUM</h1>
        </Link>
        </div>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/exhibitions">Exhibitions</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Address</h4>
            <p>Emmabodavägen 20</p>
            <p> 302 45 Nybro, Sweden</p>
            
          </div>
          <div className='sb__footer-links-div'>
          <h4>Open hours</h4>
            <p>Mandag - fredag : 10 - 16</p>
            <p>Lørdag : 10 - 15</p>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Socials</h4>
            <div className='socialmedia'>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>

  )

  /*return (
    <div className='footer'>
      <div className='Logo-main'>
        <div className='logo-footer'>
          <img src={Logofooter} alt='Logo' />
          <div className='logoText-footer'>MUSEUM</div>
        </div>
        <div className='links-socials'>
  <div className='links-to'>
    <a href="/">Home</a>
    <a href="/exhibitions">Exhibitions</a>
    <a href="/booking">Booking</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
  </div>
  <div className='socials'>
    <InstagramIcon />
    <FacebookIcon />
    <TwitterIcon />
  </div>
</div>

      </div>
    </div>
  );
  */
}

export default Footer
