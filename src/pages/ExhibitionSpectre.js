import React from 'react';
import ExhibitionCard from '../components/textpaiges'; // Import your ExhibitionCard component
import utstillingNo from '../assets/bondgunn.jpg';

function ExhibitionsSpectre() {
  return (
    <ExhibitionCard
      title="Spectre"
      text="Spectre was released in 2015, featuring Daniel Craig as James Bond, in an epic time battle against the sinister secret organization known as Spectre.
      try out painpoint replecas of James Bond guns"
      image={utstillingNo}
      buttonLink="/booking/tickets"
    />
  );
}

export default ExhibitionsSpectre;

