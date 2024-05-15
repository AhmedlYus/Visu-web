import React from 'react'
import utstillingNo from '../assets/wave1_5.jpg';
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
          <p>The museum has the quantum of solace game visitors can play aswell
            acquired special edition watches and objects used in the movie on display.</p>

            <a href="/booking/tickets" className="sfc-button"><button >Book tickets</button></a>
        </div>
      </div>
    </div>
  )
}

export default QuantumofSol;
