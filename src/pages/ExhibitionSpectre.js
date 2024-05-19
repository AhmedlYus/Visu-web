import React from 'react';
import ExhibitionCard from '../components/textpaiges'; // Import your ExhibitionCard component
import utstillingNo from '../assets/bondgunn.jpg';
import penSpectre from '../assets/omega_spectre_pencil.jpg'

function ExhibitionsSpectre() {
  return (
    <ExhibitionCard
      title="Spectre"
      text="Spectre, released in 2015, features Daniel Craig as 
      James Bond, in an epic time battle against the sinister secret 
      organization known as Spectre.
      try out painpoint replecas of James Bond guns and much more fun awaits 
      at the museum"
      image1={utstillingNo}
      image2={penSpectre}
      buttonLink="/Visu-web/booking/tickets"
    />
  );
}

export default ExhibitionsSpectre;

