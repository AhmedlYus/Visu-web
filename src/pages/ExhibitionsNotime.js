// ExhibitionsNotime.js

import React from 'react';
import ExhibitionCard2 from '../components/textpaiges2'; // Adjust the path as needed
import utstillingNo from '../assets/utstillingNotime.jpg';

function ExhibitionsNotime() {
  return (
    <ExhibitionCard2
      title="No Time to Die"
      text="The latest installment in the James Bond franchise 
      brings action-packed thrills and adventure. In celebration  
      of the movie's release, The 007 museum has acquired props 
      and objects used in the film."
      image={utstillingNo} // Correct the prop name to `image`
      buttonLink="/Visu-web/booking/tickets"
    />
  );
}

export default ExhibitionsNotime;
