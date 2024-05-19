import React from 'react';
import ExhibitionCard from '../components/textpaiges'; // Import your ExhibitionCard component
import utstillingNo from '../assets/wave1_5.jpg';
import spill from '../assets/quantumwii-3.jpg'

function QuantumofSol() {
  return (
    <div>
      <ExhibitionCard
        title="Quantum of Solace"
        text=" Delve into the thrilling world of espionage at the
         007 Museum and immerse yourself in the Quantum of Solace watch
          collection. Marvel at the sleek and stylish timepieces featured
           in the movie, each embodying the essence of sophistication and 
           innovation. Experience the adrenaline rush of the shooter game, 
           where players race against the clock to dismantle the schemes of 
           nefarious billionaires. It's an interactive journey where visitors 
           become secret agents, engaging 
           in high-stakes missions and uncovering hidden secrets."
        image1={utstillingNo}
        image2={spill}
      />
    </div>
  );
}

export default QuantumofSol;
