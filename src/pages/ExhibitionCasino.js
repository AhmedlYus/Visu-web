import React from 'react'
import CasinoOmega from '../assets/OmegaRoyale.jpeg';
import astonVantage from '../assets/aston_martin4.jpg';

function CasinoRoyale() {
  return (
    <div>
      <div className='utstilling-container'>
        <div className='utstilling-img'>
          <img src={CasinoOmega} className='Clock' alt='Clock'/>
        </div>
        <div className='text-container'>
          <div className='heading-text'>
          <h2>Casino royale</h2>
            </div>
          <p>Casino royale released in 2006, renewing the longstanding franchaise with
            Daniel Craig as the new James Bond. 
            Agent 007 is in Montenegro to sabotage Le Chiffre, a banker financing serveral
            World terrorists. 
          </p>
          <p>The 007 Museum contains several collectors items and gadgets from the movie,
            including collector watches from OMEGA, and rental of the Aston Martin DBS used in the movie
          </p>

          <a href="/booking/tickets" className="sfc-button"><button >Book tickets</button></a>
        </div>
      </div>
    </div>
  )
}

export default CasinoRoyale;
