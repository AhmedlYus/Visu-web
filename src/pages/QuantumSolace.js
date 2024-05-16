import React from 'react';
import ExhibitionCard from '../components/textpaiges'; // Import your ExhibitionCard component
import utstillingNo from '../assets/wave1_5.jpg';

function QuantumofSol() {
  return (
    <div>
      <ExhibitionCard
        title="Quantum of Solace"
        text="Quantum of Solace was made in 2008. This time, Agent Bond is tasked with taking down an evil multi-billionaire network. The museum has the Quantum of Solace game visitors can play as well as acquired special edition watches and objects used in the movie on display."
        image={utstillingNo}
      />
    </div>
  );
}

export default QuantumofSol;
