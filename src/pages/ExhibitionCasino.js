import React from 'react'
import CasinoOmega from '../assets/OmegaRoyale.jpeg';
import ExhibitionCard from '../components/textpaiges';
function CasinoRoyale() {
  return (
    <div>
      <ExhibitionCard
      title="Casino royale"
      text="Casino royale released in 2006, renewing the longstanding franchaise with
      Daniel Craig as the new James Bond. 
      Agent 007 is in Montenegro to sabotage Le Chiffre, a banker financing serveral
      World terrorists. The 007 Museum contains several collectors items and gadgets from the movie,
      including collector watches from OMEGA, and rental of the Aston Martin DBS used in the movie"
      image={CasinoOmega}
      buttonLink="/booking/tickets"
    />
    </div>
  )
}

export default CasinoRoyale;
