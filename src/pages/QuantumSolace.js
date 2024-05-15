import React from 'react'
import utstillingNo from '../assets/utstillingNotime.jpg';
import '../styles/Notime.css';


function QuantumofSol() {
  return (
    <div>
      <div className='utstilling-container'>
        <div className='utstilling-img'>
          <img src={utstillingNo} alt='utstilling img'/>
        </div>
        <div className='text-container'>
          <div className='heading-text'>
          <h2>Quamtum of Solace</h2>
            </div>
          <p>Quantum of Solace was made in 2008, this time Agent Bond is tasked with
            taking down a evil multi billionre network.
          </p>
          <p>For the release of the movie the 007 museum has 
            acquired props and objects used in the movie on display.</p>

            <button className='button'>Book tickets now</button>
        </div>
      </div>
    </div>
  )
}

export default QuantumofSol;
