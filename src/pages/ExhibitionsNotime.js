import React from 'react'
import utstillingNo from '../assets/utstillingNotime.jpg';
import '../styles/Notime.css';


function ExhibitionsNotime() {
  return (
    <div>
      <div className='utstilling-container'>
        <div className='utstilling-img'>
          <img src={utstillingNo} alt='utstilling img'/>
        </div>
        <div className='text-container'>
          <div className='heading-text'>
          <h2>No Time to Die</h2>
            </div>
          <p>The latest installment in the James Bond franchaise brining
          action packed thrill and adventure
          </p>
          <p>For the release of the movie the 007 museum has 
            acquired props and objects used in the movie</p>

            <a href="/booking/tickets" className="sfc-button"><button >Book tickets</button></a>
        </div>
      </div>
    </div>
  )
}

export default ExhibitionsNotime;
