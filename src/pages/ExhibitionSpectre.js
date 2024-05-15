import React from 'react'
import utstillingNo from '../assets/utstillingNotime.jpg';
import '../styles/Notime.css';


function ExhibitionsSpectre() {
  return (
    <div>
      <div className='utstilling-container'>
        <div className='utstilling-img'>
          <img src={utstillingNo} alt='utstilling img'/>
        </div>
        <div className='text-container'>
          <div className='heading-text'>
          <h2>Spectre</h2>
            </div>
          <p>Spectre was released in 2015, featuring <br></br>Daniel Craig as James Bond, in an epic
            time battle against the sinister secret organisation known as Spectre.
          </p>
          
            <button className='button'>Book tickets now</button>
        </div>
      </div>
    </div>
  )
}

export default ExhibitionsSpectre;
