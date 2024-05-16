import React from 'react';
import ExhibitionCard from '../components/textpaiges'; // Import your ExhibitionCard component
import utstillingNo from '../assets/utstillingNotime.jpg';

function ExhibitionsNotime() {
  return (
    <ExhibitionCard
      title="No Time to Die"
      text="The latest installment in the James Bond franchise, 
      bringing action-packed thrills and adventure. For the 
      release of the movie, the 007 museum has acquired props 
      and objects used in the movie."
      image={utstillingNo}
      buttonLink="/booking/tickets"
    />
  );
}

export default ExhibitionsNotime;
